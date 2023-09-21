import { currentUser, load, provideDataItem } from 'scrivito'

export const CurrentUserDataItem = provideDataItem('CurrentUser', async () => {
  const user = await load(currentUser)
  if (!user) return {}

  return {
    jrUserId: user.id(),
    name: user.name(),
    email: user.email(),
    picture:
      'https://secure.gravatar.com/avatar/45b31509c11165be5fac1dd17b76accf?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fap.png',
    // picture: '',
  }
})
