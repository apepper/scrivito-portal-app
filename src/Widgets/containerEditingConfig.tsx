import { Widget } from 'scrivito'
import { AttributeDimensionEditor } from '../Components/ScrivitoExtensions/AttributeDimensionEditor'

export const containerEditingAttributes = {
  width: {
    title: 'Width',
  },
  height: {
    title: 'Height',
  },
  backgroundColor: {
    title: 'Background color',
    editor: 'colorPicker',
  },
} as const

export const containerPropertiesGroup = {
  title: 'Container',
  properties: [
    [
      'width',
      {
        component: ({ widget }: { widget?: Widget }) => (
          <AttributeDimensionEditor
            widget={widget}
            attribute="width"
            units={['px', '%']}
          />
        ),
      },
    ],
    [
      'height',
      {
        component: ({ widget }: { widget?: Widget }) => (
          <AttributeDimensionEditor
            widget={widget}
            attribute="height"
            units={['px']}
          />
        ),
      },
    ],
    'backgroundColor',
  ],
  key: 'containerPropertiesGroup',
} as const
