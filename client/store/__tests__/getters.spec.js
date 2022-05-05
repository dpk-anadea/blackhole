import getters from '@/store/getters'
import { get } from '@/store/constants'
import userFactory from '@factory/user.factory'

describe('Getters tests:', () => {
  it('current user', async () => {
    const user = await userFactory.create('user')

    const state = { user }

    const actual = getters[get.CURRENT_USER](state)

    expect(actual).toEqual(user)
  })

  it('is authenticated', () => {
    const isAuth = true
    const state = { isAuth }

    const actual = getters[get.IS_AUTHENTICATED](state)

    expect(actual).toEqual(isAuth)
  })

  it('loading', () => {
    const loading = true
    const state = { loading }

    const actual = getters[get.LOADING](state)

    expect(actual).toEqual(loading)
  })
})
