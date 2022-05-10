import getters from '@/store/getters'
import { get } from '@/store/constants'
import { store } from '@/components/__mocks__/store'

describe('Getters', () => {
  it('allows to get the user', async () => {
    const actual = getters[get.CURRENT_USER](store.state)

    expect(actual).toEqual(store.state.user)
  })

  it('allows to get the authentication status', () => {
    const actual = getters[get.IS_AUTHENTICATED](store.state)

    expect(actual).toEqual(store.state.isAuth)
  })

  it('allows to get the loading status', () => {
    const actual = getters[get.LOADING](store.state)

    expect(actual).toEqual(store.state.loading)
  })
})
