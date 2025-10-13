import { BorderRadiusEditor } from '../Components/ScrivitoExtensions/BorderRadiusEditor'

export const borderRadiusEditingConfigAttributes = {
  borderTopLeftRadius: {
    title: 'Top left',
  },
  borderTopRightRadius: {
    title: 'Top right',
  },
  borderBottomLeftRadius: {
    title: 'Bottom left',
  },
  borderBottomRightRadius: {
    title: 'Bottom right',
  },
} as const

export const borderRadiusPropertiesGroup = {
  title: 'Border Radius',
  properties: [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ],
  component: BorderRadiusEditor,
  key: 'borderRadiusPropertiesGroup',
} as const
