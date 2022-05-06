import api from '@/api/api'
import actions from '@/store/actions'
import { action } from '@/store/constants'
import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'

const commit = jest.fn()

jest.mock('@/router', () => ({
  push: jest.fn()
}))

describe('Actions', () => {
  it('allows to get all users', async () => {
    const users = await userFactory.create('user')

    api.getUsers = jest.fn().mockReturnValue({ users })

    await actions[action.GET_USERS]({ commit }, users)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USERS', {
      users
    })
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('allows to create user', async () => {
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

  it('allows to log in to account', async () => {
    const user = await userFactory.create('user')

    api.login = jest.fn().mockReturnValue({ user })

    await actions[action.LOGIN]({ commit }, user)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', user)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', true)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('allows to logout to account', async () => {
    api.logout = jest.fn()

    await actions[action.LOGOUT]({ commit })

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', null)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', false)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('allows to check authorization', async () => {
    const user = await userFactory.create('user')

    api.checkAuth = jest.fn().mockReturnValue({ user })

    await actions[action.CHECK_AUTH]({ commit })

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_USER', user)
    expect(commit).toHaveBeenCalledWith('SET_AUTH', true)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })

  it('allows to get all products', async () => {
    const product = await productFactory.create('product')

    api.getProducts = jest.fn().mockReturnValue(product)

    await actions[action.GET_PRODUCTS]({ commit }, product)

    expect(commit).toHaveBeenCalledWith('SET_LOADING', true)
    expect(commit).toHaveBeenCalledWith('SET_PRODUCTS', product)
    expect(commit).toHaveBeenCalledWith('SET_LOADING', false)
  })
})
