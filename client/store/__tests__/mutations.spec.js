import { mutator } from '@/store/constants'
import mutations from '@/store/mutations'
import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'

describe('Mutations tests:', () => {
  it('allows to get users', async () => {
    const user1 = await userFactory.create('user')
    const user2 = await userFactory.create('user')
    const users = { user1, user2 }

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

  it('adds products', async () => {
    const product1 = await userFactory.create('product')
    const product2 = await userFactory.create('product')
    const products = { product1, product2 }

    const state = {
      products: null
    }

    mutations[mutator.SET_PRODUCTS](state, products)
    expect(state).toEqual({
      products: products
    })
  })
})
