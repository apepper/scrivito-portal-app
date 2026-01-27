import { provideDataService } from 'scrivito'

import.meta.glob(['./**/*DataClass.ts', './**/*DataItem.ts'], { eager: true })

provideDataService('https://web102.crm.pisasales.de/api/portal')

export {}
