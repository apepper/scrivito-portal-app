import { BordersEditor } from '../Components/ScrivitoExtensions/BordersEditor'

export const bordersEditingConfigAttributes = {
  borderTop: {
    title: 'Top',
  },
  borderLeft: {
    title: 'Light',
  },
  borderRight: {
    title: 'Right',
  },
  borderBottom: {
    title: 'Bottom',
  },
} as const

export const bordersPropertiesGroup = {
  title: 'Borders',
  properties: ['borderTop', 'borderLeft', 'borderRight', 'borderBottom'],
  component: BordersEditor,
  key: 'bordersPropertiesGroup',
} as const
