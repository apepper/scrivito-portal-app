import { provideWidgetClass } from 'scrivito'

const textTransformOptions = {
  values: ['none', 'uppercase', 'lowercase', 'capitalize'],
} as const

export const TextWidget = provideWidgetClass('TextWidget', {
  attributes: {
    text: 'html',
    textTransform: ['enum', { ...textTransformOptions }],
    textTransformTablet: [
      'enum',
      {
        ...textTransformOptions,
        emptyValue: (widget) => widget.get('textTransform'),
      },
    ],
    textTransformMobile: [
      'enum',
      {
        ...textTransformOptions,
        emptyValue: (widget) => widget.get('textTransform'),
      },
    ],
  },
  extractTextAttributes: ['text'],
})
