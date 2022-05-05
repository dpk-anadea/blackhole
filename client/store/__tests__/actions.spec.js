import actions from '@/store/actions'
import { action } from '@/store/constants'
import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'
import api from '@/api/api'

jest.mock('@/router', () => ({
  push: jest.fn()
}))

describe('Actions tests:', () => {
  const commit = jest.fn()

  it('get users', async () => {
    const user1 = await userFactory.create('user')
    const user2 = await userFactory.create('user')
    const users = { user1, user2 }

    api.getUsers = jest.fn().mockReturnValue({ users })

    await actions[action.GET_USERS]({ commit }, users)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USERS', {
      users
    })
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('create user', async () => {
    const user = await userFactory.create('user')

    api.registration = jest.fn().mockReturnValue({
      user
    })

    await actions[action.CREATE_USER]({ commit }, user)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', user)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', true)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('login', async () => {
    const user = {
      email: 'test@mail.ru',
      password: 'secret'
    }

    api.login = jest.fn().mockReturnValue({ user })

    await actions[action.LOGIN]({ commit }, user)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', user)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', true)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('logout', async () => {
    api.logout = jest.fn()

    await actions[action.LOGOUT]({ commit })

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', null)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', false)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('check auth', async () => {
    const user = await userFactory.create('user')

    api.checkAuth = jest.fn().mockReturnValue({ user })

    await actions[action.CHECK_AUTH]({ commit })

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', user)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', true)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('get products', async () => {
    const product1 = await productFactory.create('product')
    const product2 = await productFactory.create('product')
    const products = { product1, product2 }

    api.getProducts = jest.fn().mockReturnValue(products)

    await actions[action.GET_PRODUCTS]({ commit }, products)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_PRODUCTS', products)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })
})
