import { provideWidgetClass } from 'scrivito'
import { paddingAttributes } from '../paddingAttributes'
import { textStyleAttributes } from '../textStyleAttributes'
import { containerAttributes } from '../containerAttributes'
import { alignmentAttributes } from '../alignmentAttributes'

export const TextWidget = provideWidgetClass('TextWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }], // TODO: Remove deprecated attribute
    text: 'html',
    ...containerAttributes,
    ...textStyleAttributes,
    ...paddingAttributes,
    ...alignmentAttributes,
  },
  extractTextAttributes: ['text'],
})
