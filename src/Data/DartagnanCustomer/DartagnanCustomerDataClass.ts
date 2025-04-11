import { provideDataClass } from 'scrivito'

export const DartagnanCustomer = provideDataClass('DartagnanCustomer', {
  title: 'Dartagnan Customer',
  attributes: {
    name: 'string',
    logo: 'string',
    created: 'string',
    updated: 'string',
  },
  connection: {
    async index() {
      return {
        results: [
          {
            id: 1,
            name: 'Dartagnan',
            logo: 'uploads/logos/aaa7c724325f6dd11724a0e0de4b5073.png',
            created: '2021-09-13T13:08:47+02:00',
            updated: '2024-10-03T13:26:03+02:00',
          },
          {
            id: 1000083,
            name: 'test',
            logo: null,
            created: '2024-02-22T10:54:24+01:00',
            updated: '2025-04-07T10:44:43+02:00',
          },
        ],
      }
    },
  },
})
