import { createStore } from 'vuex'
import { action } from '@/store/constants'

export const actions = {
  [action.GET_PRODUCTS]: jest.fn(),
  [action.CHECK_AUTH]: jest.fn(),
  [action.LOGOUT]: jest.fn(),
  [action.LOGIN]: jest.fn(),
  [action.CREATE_USER]: jest.fn(),
  [action.GET_USERS]: jest.fn()
}

export const emptyStore = createStore({
  state: {
    loading: false,
    isAuth: false,
    user: null,
    users: null,
    products: null
  },
  actions,
  dispatch: jest.fn()
})

export const store = createStore({
  state: {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    phoneNumber: '123456789',
    email: 'test@mail.ru',
    password: 'secret',
    confirmPassword: 'secret',
    products: [
      {
        id: 1,
        name: 'Lotus - Analog Delay / Pitch Shifter',
        type: 'One-Shots',
        description: 'LOTUS is an analog delay',
        cost: '120'
      },
      {
        id: 2,
        name: 'Lotus - Analog Delay / Pitch Shifter',
        type: 'One-Shots',
        description: 'LOTUS is an analog delay',
        cost: '120'
      },
      {
        id: 3,
        name: 'Lotus - Analog Delay / Pitch Shifter',
        type: 'One-Shots',
        description: 'LOTUS is an analog delay',
        cost: '120'
      }
    ]
  },
  actions,
  dispatch: jest.fn()
})
