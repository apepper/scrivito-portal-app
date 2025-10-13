import { provideWidgetClass } from 'scrivito'
import { paddingAttributes } from '../paddingAttributes'
import { textStyleAttributes } from '../textStyleAttributes'
import { containerAttributes } from '../containerAttributes'

export const TextWidget = provideWidgetClass('TextWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    text: 'html',
    ...containerAttributes,
    ...textStyleAttributes,
    ...paddingAttributes,
  },
  extractTextAttributes: ['text'],
})
