import { provideEditingConfig } from 'scrivito'
import { TextWidget } from './TextWidgetClass'
import Thumbnail from './thumbnail.svg'
import {
  paddingEditingConfigAttributes,
  paddingPropertiesGroup,
} from '../paddingEditingConfig'
import {
  textStyleEditingConfigAttributes,
  textStylePropertiesGroup,
} from '../textStyleEditingConfig'

provideEditingConfig(TextWidget, {
  title: 'Text',
  thumbnail: Thumbnail,
  attributes: {
    alignment: {
      title: 'Text alignment',
      description: 'Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
    text: {
      title: 'Content',
    },
    ...textStyleEditingConfigAttributes,
    ...paddingEditingConfigAttributes,
  },
  properties: ['alignment', 'text'],
  propertiesGroups: [textStylePropertiesGroup, paddingPropertiesGroup],
  initialContent: {
    alignment: 'left',
    text: 'Text',
  },
})
