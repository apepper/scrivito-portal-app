import { SocialCardsTab } from '../Components/ScrivitoExtensions/SocialCardsTab'

export const defaultPageEditingConfigAttributes = {
  title: {
    title: 'Title',
    description: 'Limit to 55 characters.',
  },
  metaDataDescription: {
    title: 'Page description',
    description: 'Limit to 175, ideally 150 characters.',
  },
  robotsIndex: {
    title: 'Should this page be indexed?',
    description: 'If not, search engines will ignore this page. Default: Yes',
  },
}

export const defaultPageInitialContent = {
  robotsIndex: true,
} as const

export const defaultPagePropertiesGroups = [
  {
    title: 'Metadata',
    properties: ['metaDataDescription', 'robotsIndex'],
    key: 'metadata-group',
  },
  {
    title: 'Social cards',
    component: SocialCardsTab,
    properties: [
      'ogDescription',
      'ogImage',
      'ogTitle',
      'tcCreator',
      'tcDescription',
      'tcImage',
      'tcTitle',
    ],
    key: 'social-cards-group',
  },
] as const

export const defaultPageProperties = ['title']

export const defaultPageValidations = [
  [
    'title',

    (title: string) => {
      if (title.length === 0) {
        return {
          message: 'The title should be set.',
          severity: 'warning',
        }
      }
    },
  ],
  [
    'metaDataDescription',

    (metaDataDescription: string) => {
      if (metaDataDescription.length === 0) {
        return {
          message: 'The metaDataDescription should be set.',
          severity: 'warning',
        }
      }
    },
  ],
  [
    'tcCreator',

    (tcCreator: string) => {
      if (tcCreator && tcCreator.charAt(0) !== '@') {
        return {
          message: 'The creator should start with @.',
          severity: 'warning',
        }
      }
    },
  ],
  [
    'tcDescription',

    (tcDescription: string) => {
      if (tcDescription && tcDescription.length > 200) {
        return {
          message: 'The Twitter description should not exceed 200 characters.',
          severity: 'warning',
        }
      }
    },
  ],
  [
    'ogDescription',

    (ogDescription: string) => {
      if (ogDescription && ogDescription.length > 300) {
        return {
          message: 'The Facebook description should not exceed 300 characters.',
          severity: 'warning',
        }
      }
    },
  ],
] as const
