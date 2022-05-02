import { mutator } from '@/store/constants'
import mutations from '@/store/mutations'
import userFactory from '@factory/user.factory'

describe('Mutations tests:', () => {
  it('allows to get users', () => {
    const users = [
      {
        email: 'gilbert@mail.ru',
        id: 1,
        first_name: 'Post',
        last_name: 'Gilbert',
        phone: '123456789',
        password: 'secret'
      },
      {
        email: 'gilbert@mail.ru',
        id: 1,
        first_name: 'Post',
        last_name: 'Gilbert',
        phone: '123456789',
        password: 'secret'
      }
    ]

    const state = {
      users: null
    }

    mutations[mutator.SET_USERS](state, { users })
    expect(state).toEqual({
      users: {
        users: users
      }
    })
  })

  it('allows to get user', async () => {
    const user = await userFactory.attrs('user')
    const state = {
      user: null
    }

    mutations[mutator.SET_USER](state, { user })
    expect(state).toEqual({
      user: {
        user: user
      }
    })
  })

  it('set of authentication', () => {
    const isAuth = true
    const state = {
      isAuth: false
    }

    mutations[mutator.SET_AUTH](state, isAuth)
    expect(state).toEqual({
      isAuth: isAuth
    })
  })

  it('adds loading', () => {
    const loading = true
    const state = {
      loading: false
    }

    mutations[mutator.SET_LOADING](state, loading)
    expect(state).toEqual({
      loading: loading
    })
  })

  it('adds products', () => {
    const products = [
      {
        name: 'Test1',
        type: 'Test1',
        description: 'Test1',
        cost: '100'
      },
      {
        name: 'Test2',
        type: 'Test2',
        description: 'Test2',
        cost: '200'
      }
    ]
    const state = {
      products: null
    }

    mutations[mutator.SET_PRODUCTS](state, products)
    expect(state).toEqual({
      products: products
    })
  })
})
