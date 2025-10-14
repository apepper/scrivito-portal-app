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
import {
  containerEditingAttributes,
  containerPropertiesGroup,
} from '../containerEditingConfig'
import {
  alignmentEditingAttributes,
  alignmentPropertiesGroup,
} from '../alignmentEditingConfig'

provideEditingConfig(TextWidget, {
  title: 'Text',
  thumbnail: Thumbnail,
  attributes: {
    // alignment: {
    //   title: 'Text alignment',
    //   description: 'Default: Left',
    //   values: [
    //     { value: 'left', title: 'Left' },
    //     { value: 'center', title: 'Center' },
    //     { value: 'right', title: 'Right' },
    //   ],
    // },
    text: {
      title: 'Content',
    },
    ...containerEditingAttributes,
    ...textStyleEditingConfigAttributes,
    ...paddingEditingConfigAttributes,
    ...alignmentEditingAttributes,
  },
  properties: [
    // 'alignment',
    'text',
    'width',
  ],
  propertiesGroups: [
    containerPropertiesGroup,
    textStylePropertiesGroup,
    paddingPropertiesGroup,
    alignmentPropertiesGroup,
  ],
  initialContent: {
    alignment: 'left',
    text: 'Text',
  },
})
