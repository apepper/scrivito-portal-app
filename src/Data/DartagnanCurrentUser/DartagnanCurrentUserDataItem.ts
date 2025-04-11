import { provideDataItem } from 'scrivito'

export const DartagnanCurrentUser = provideDataItem('DartagnanCurrentUser', {
  title: 'Dartagnan Current User',
  connection: {
    async get() {
      return {
        id: 1000085,
        email: 'alexander.pepper@justrelate.com',
        roles: ['ROLE_USER'],
        enabled: true,
        firstname: 'Alexander',
        lastname: 'Pepper',
        language: 'de',
        created: '2025-04-07T10:19:13+02:00',
        noticeByEmail: 3,
        noticeInApplication: 2,
        groups: [],
        customerUsers: [
          {
            roleType: 'READER_USER',
            customer: 1000083,
          },
          {
            roleType: 'ADMIN_USER',
            customer: 1,
          },
        ],
      }
    },
  },
})
