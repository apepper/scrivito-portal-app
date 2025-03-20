#!npx vite-node
import fs from 'fs'
import { configure, createRestApiClient } from 'scrivito'
import { loadEnv } from 'vite'

type ObjData = {
  _id: string
  _path?: string
  _site_id?: string
  _widget_pool?: Record<string, WidgetData>
  pisa_url?: unknown
}
type WidgetData = Record<string, unknown>
type SearchData = { continuation?: string; objs: ObjData[] }
type BlobsData = { private_access: { get: { url: string } } }
type BlobMetadata = {
  meta_data: { content_type: ['string', string]; filename: ['string', string] }
}

const DUMP_PATH = 'contentDump'
const BINARIES_PATH = `${DUMP_PATH}/binaries`
const OBJS_PATH = `${DUMP_PATH}/objs`

const env = loadEnv('development', process.cwd(), '')

const API_CLIENT_ID = env.CONTENT_MASTER_API_CLIENT_ID || ''
const API_CLIENT_SECRET = env.CONTENT_MASTER_API_CLIENT_SECRET || ''
const INSTANCE_ID = env.CONTENT_MASTER_SCRIVITO_TENANT || ''

const scrivitoClient = createRestApiClient(
  `https://api.scrivito.com/tenants/${INSTANCE_ID}`,
  { headers: { 'Scrivito-Access-As': 'editor' } },
)

if (API_CLIENT_ID && API_CLIENT_SECRET && INSTANCE_ID) {
  configure({
    tenant: INSTANCE_ID,
    apiKey: {
      clientId: API_CLIENT_ID,
      clientSecret: API_CLIENT_SECRET,
    },
    priority: 'background',
  })

  clearDump()
  await dumpContent()
  console.log(`\n✅ Dump complete (${fileStats()}).`)
} else {
  console.error(
    'Please provide CONTENT_MASTER_SCRIVITO_TENANT and credentials:',
    'CONTENT_MASTER_API_CLIENT_ID, CONTENT_MASTER_API_CLIENT_SECRET.',
  )
  process.exitCode = -1
}

function clearDump() {
  fs.rmSync(DUMP_PATH, { force: true, recursive: true })
  fs.mkdirSync(OBJS_PATH, { recursive: true })
  fs.mkdirSync(BINARIES_PATH, { recursive: true })
}

function fileStats() {
  const objs = fs.readdirSync(OBJS_PATH)
  const binaries = fs.readdirSync(BINARIES_PATH)
  return `${objs.length} objs and ${binaries.length} binaries`
}

async function dumpContent() {
  let continuation: string | undefined

  do {
    const data = (await scrivitoClient.put('workspaces/published/objs/search', {
      data: {
        continuation,
        include_objs: true,
        query: [
          {
            field: '_site_id',
            operator: 'equals',
            value: 'mailing-app',
            negate: true,
          },
        ],
        options: { site_aware: true },
        size: 10,
      },
    })) as SearchData
    process.stdout.write('.')

    for (const objData of data.objs) {
      const processedObjData = ignorePerInstanceData(objData)
      await dumpObjAndBinaries(processedObjData)
    }

    continuation = data.continuation
  } while (continuation)
}

function ignorePerInstanceData(objData: ObjData): ObjData {
  delete objData.pisa_url

  return objData
}

async function dumpObjAndBinaries(objData: ObjData) {
  await dumpBinaries(objData)
  dumpObj(objData)
}

async function dumpBinaries(data: ObjData | WidgetData) {
  for (const value of Object.values(data)) {
    if (isBinaryAttribute(value)) await dumpBinary(value[1].id)
  }

  const widgetPool = data._widget_pool || {}
  for (const widget of Object.values(widgetPool)) await dumpBinaries(widget)
}

function isBinaryAttribute(data: unknown): data is ['binary', { id: string }] {
  if (!Array.isArray(data)) return false
  const [attributeType, attributeValue] = data
  return (
    attributeType === 'binary' &&
    !!attributeValue &&
    typeof attributeValue === 'object' &&
    typeof attributeValue.id === 'string'
  )
}

async function dumpBinary(binaryId: string) {
  const binary = (await scrivitoClient.get(
    `blobs/${encodeURIComponent(binaryId)}`,
  )) as BlobsData
  process.stdout.write('.')
  const url = binary.private_access.get.url
  const response = await fetch(url)
  if (response.status !== 200) throw new Error(`Failed to fetch ${url}`)
  const blob = await response.blob()
  fs.writeFileSync(
    `${BINARIES_PATH}/${encodeURIComponent(binaryId)}`,
    Buffer.from(await blob.arrayBuffer()),
  )
}

function dumpObj(objData: ObjData) {
  fs.writeFileSync(
    `${OBJS_PATH}/${objData._id}.json`,
    JSON.stringify(objData, null, 2),
  )
}
