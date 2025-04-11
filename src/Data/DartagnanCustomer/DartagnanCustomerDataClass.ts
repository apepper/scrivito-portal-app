import { provideDataClass } from 'scrivito'

export const DartagnanCustomer = provideDataClass('DartagnanCustomer', {
  title: 'Dartagnan Customer',
  attributes: {
    name: 'string',
    logo: 'string',
    created: 'date',
    updated: 'date',
  },
  connection: {
    async index() {
      return {
        results: [
          {
            id: 1,
            name: 'Dartagnan',
            logo: 'uploads/logos/aaa7c724325f6dd11724a0e0de4b5073.png',
            created: '2021-09-13T11:08:47Z',
            updated: '2024-10-03T11:26:03Z',
          },
          {
            id: 1000083,
            name: 'test',
            logo: null,
            created: '2024-02-22T09:54:24Z',
            updated: '2025-04-07T08:44:43Z',
          },
        ],
      }
    },
  },
})
