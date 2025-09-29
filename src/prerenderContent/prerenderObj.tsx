import * as ReactDOMServer from 'react-dom/server'
import { parse } from 'node-html-parser'
import { App } from '../App'
import { contentHash } from './contentHash'
import { filenameFromUrl } from './filenameFromUrl'
import { generateHtml } from './generateHtml'
import { generatePreloadDump } from './generatePreloadDump'
import { Obj, renderPage, urlFor } from 'scrivito'

export async function prerenderObj(
  obj: Obj,
  baseHtmlTemplate: string,
): Promise<{ filename: string; content: string }[]> {
  const {
    result: { objId, objUrl, ...data },
    preloadDump,
  } = await renderPage(obj, () => {
    const rawBodyContent = ReactDOMServer.renderToString(<App />)
    const { title, bodyContent, meta, link, style } =
      extractHeadElements(rawBodyContent)

    return {
      bodyContent,
      htmlAttributes: `lang="${obj.language() || 'en'}"`,
      link,
      meta,
      objId: obj.id(),
      objUrl: urlFor(obj),
      style,
      title,
    }
  })

  const preloadDumpFileContent = generatePreloadDump(preloadDump)
  const preloadDumpContentHash = await contentHash(preloadDumpFileContent)
  const preloadDumpFileName = `/assets/preloadDumps/${objId}.${preloadDumpContentHash}.js`
  const preloadDumpScript = `<script type="module" src="${preloadDumpFileName}"></script>`

  return [
    { filename: preloadDumpFileName, content: preloadDumpFileContent },
    {
      filename: filenameFromUrl(objUrl),
      content: await generateHtml(baseHtmlTemplate, {
        ...data,
        preloadDumpScript,
      }),
    },
  ]
}

function extractHeadElements(html: string): {
  title: string
  bodyContent: string
  meta: string
  link: string
  style: string
} {
  const parsedBodyContent = parse(html)

  const title = parsedBodyContent.querySelector('title')?.toString() || ''

  const metaTags = parsedBodyContent.querySelectorAll('meta')
  const meta = metaTags.map((tag) => tag.toString()).join('')

  const linkTags = parsedBodyContent.querySelectorAll('link')
  const link = linkTags.map((tag) => tag.toString()).join('')

  const styleTags = parsedBodyContent.querySelectorAll('style')
  const style = styleTags.map((tag) => tag.toString()).join('')

  let bodyContent = html

  bodyContent = stripTag(bodyContent, title)

  metaTags.forEach((tag) => {
    const tagString = tag.toString()

    // Adjust self-closing tags for React style if necessary
    const reactTag = !tagString.endsWith('/>')
      ? tagString.replace('>', '/>')
      : tagString

    bodyContent = stripTag(bodyContent, reactTag)
  })

  linkTags.forEach((tag) => {
    const tagString = tag.toString()

    // Adjust self-closing tags for React style if necessary
    const reactTag = !tagString.endsWith('/>')
      ? tagString.replace('>', '/>')
      : tagString

    bodyContent = stripTag(bodyContent, reactTag)
  })

  styleTags.forEach((tag) => {
    const tagString = tag.toString()
    bodyContent = stripTag(bodyContent, tagString)
  })

  return { title, bodyContent, meta, link, style }
}

function stripTag(content: string, tag: string): string {
  if (!content.includes(tag)) {
    throw new Error(`HTML tag not found in content: ${tag}`)
  }

  return content.replace(tag, '')
}
