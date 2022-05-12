import { createStore } from 'vuex'
import { action, get } from '@/store/constants'
import state from '@/store/state'
import userFactory from '@factory/user.factory'

const user = userFactory.create('user')

export const actions = {
  [action.LOGIN]: jest.fn(),
  [action.LOGOUT]: jest.fn(),
  [action.GET_USERS]: jest.fn(),
  [action.CREATE_USER]: jest.fn(),
  [action.GET_PRODUCTS]: jest.fn(),
  [action.CHECK_AUTH]: jest.fn(),
  [action.ADD_PRODUCT_TO_CART]: jest.fn(),
  [action.GET_PRODUCTS_FROM_STORAGE]: jest.fn(),
  [action.DELETE_PRODUCT_FROM_CART]: jest.fn(),
  [action.TOGGLE_FLASH_MESSAGE]: jest.fn()
}

export const getters = {
  [get.LOADING]: jest.fn(),
  [get.IS_AUTHENTICATED]: jest.fn(),
  [get.CURRENT_USER]: jest.fn(),
  [get.CART]: jest.fn(),
  [get.IS_SHOW_FLASH_MESSAGE]: () => {
    return true
  },
  [get.PRODUCTS]: jest.fn()
}

export const mockState = {
  isAuth: true,
  loading: true,
  isShowFleshMessage: true,
  user: user,
  firstName: 'Ivan',
  password: 'secret',
  lastName: 'Ivanov',
  email: 'test@mail.ru',
  phoneNumber: '123456789',
  confirmPassword: 'secret',
  product: {
    id: 1,
    name: 'Product-1',
    description: 'test@mail.ru'
  },
  cart: [
    {
      id: 1,
      name: 'Product-1',
      description: 'test@mail.ru',
      count: 1
    }
  ],
  users: [
    {
      id: 1,
      name: 'John',
      email: 'test@mail.ru',
      password: 'secret'
    }
  ],
  products: [
    {
      id: 1,
      name: 'Lotus - Analog Delay / Pitch Shifter',
      type: 'One-Shots',
      description: 'LOTUS is an analog delay',
      cost: '120'
    }
  ]
}

export const emptyStore = createStore({
  state,
  getters,
  actions,
  dispatch: jest.fn()
})

export const store = createStore({
  state: { ...mockState },
  getters,
  actions,
  dispatch: jest.fn()
})
