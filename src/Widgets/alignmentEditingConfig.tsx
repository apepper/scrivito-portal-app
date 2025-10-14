export const alignmentEditingAttributes = {
  align: {
    title: 'Element alignment',
    values: [
      { value: 'left', title: 'Left' },
      { value: 'center', title: 'Center' },
      { value: 'right', title: 'Right' },
    ],
  },
  textAlign: {
    title: 'Text alignment',
    values: [
      { value: 'left', title: 'Left' },
      { value: 'center', title: 'Center' },
      { value: 'right', title: 'Right' },
    ],
  },
  verticalAlign: {
    title: 'Vertical text alignment',
    values: [
      { value: 'top', title: 'Top' },
      { value: 'middle', title: 'Middle' },
      { value: 'bottom', title: 'Bottom' },
    ],
  },
} as const

export const alignmentPropertiesGroup = {
  title: 'Alignment',
  properties: ['textAlign', 'verticalAlign', 'align'],
  key: 'alignmentPropertiesGroup',
} as const
