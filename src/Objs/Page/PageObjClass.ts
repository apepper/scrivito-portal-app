import { provideObjClass } from 'scrivito'

export const Page = provideObjClass('Page', {
  attributes: {
    body: 'widgetlist',
    childOrder: 'referencelist',
    data: 'datalocator',
    hideInNavigation: 'boolean',
    linkIcon: 'string',
    metaDataDescription: 'string',
    requireUserLogin: 'boolean',
    title: 'string',
  },
  extractTextAttributes: ['body'],
})
