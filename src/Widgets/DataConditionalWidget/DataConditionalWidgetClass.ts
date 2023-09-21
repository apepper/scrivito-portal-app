import { provideWidgetClass } from 'scrivito'

export const DataConditionalWidget = provideWidgetClass(
  'DataConditionalWidget',
  {
    attributes: {
      data: 'datalocator',
      trueBody: 'widgetlist',
      falseBody: 'widgetlist',
    },
  },
)
