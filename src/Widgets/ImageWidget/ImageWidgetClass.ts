import { provideWidgetClass } from 'scrivito'
import { paddingAttributes } from '../paddingAttributes'

export const ImageWidget = provideWidgetClass('ImageWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    alternativeText: 'string',
    height: 'string',
    image: ['reference', { only: 'Image' }],
    link: 'link',
    objectFit: ['enum', { values: ['cover', 'contain'] }],
    roundCorners: 'boolean',
    width: 'string',
    ...paddingAttributes,
  },
})

export type ImageWidgetInstance = InstanceType<typeof ImageWidget>
