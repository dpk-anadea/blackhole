import getters from '@/store/getters'
import { get } from '@/store/constants'

describe('Getters tests:', () => {
  it('current user', () => {
    const user = [
      {
        email: 'gilbert@mail.ru',
        id: 1,
        first_name: 'Post',
        last_name: 'Gilbert',
        phone: '123456789',
        password: 'secret'
      }
    ]
    const state = { user }

    const actual = getters[get.CURRENT_USER](state)

    expect(actual).toEqual([user[0]])
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
