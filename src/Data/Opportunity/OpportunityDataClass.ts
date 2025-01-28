import { provideDataClass } from 'scrivito'
import { pisaConfig } from '../pisaClient'

export const Opportunity = provideDataClass(
  'Opportunity',
  (async () => {
    const restApi = await pisaConfig('opportunity')
    if (!restApi) {
      return (
        await import('./opportunityParamsFallback')
      ).opportunityParamsFallback()
    }

    return { restApi }
  })(),
)
