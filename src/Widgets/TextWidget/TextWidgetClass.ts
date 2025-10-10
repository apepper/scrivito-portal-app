import { provideWidgetClass } from 'scrivito'
import { paddingAttributes } from '../paddingAttributes'
import { textStyleAttributes } from '../textStyleAttributes'

export const TextWidget = provideWidgetClass('TextWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    text: 'html',
    ...textStyleAttributes,
    ...paddingAttributes,
  },
  extractTextAttributes: ['text'],
})
