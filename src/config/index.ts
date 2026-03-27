import { configureErrorReporting } from './configureErrorReporting'
import { jrPlatformConfigureEtracker } from '../privateJrPlatform/jrPlatformConfigureEtracker'
import { configurePisaSalesQuestionnaireWidgets } from './configurePisaSalesQuestionnaireWidgets'
import { configureHistory } from './history'
import { configureObjClassForContentType } from './objClassForContentType'
import { configureScrivito } from './scrivito'
import { configureScrivitoContentBrowser } from './scrivitoContentBrowser'
import { configureWindowScrivito } from './windowScrivito'
import { configurePisaSalesDataService } from '../Data/configurePisaSalesDataService'

export async function configure() {
  configureScrivito()

  configureObjClassForContentType()
  configureScrivitoContentBrowser()
  configureHistory()
  configureErrorReporting()
  configureWindowScrivito()
  await configurePisaSalesDataService()
  configurePisaSalesQuestionnaireWidgets()

  if (import.meta.env.PRIVATE_JR_PLATFORM) {
    jrPlatformConfigureEtracker()
  }
}
