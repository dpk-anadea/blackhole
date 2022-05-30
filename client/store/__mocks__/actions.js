import { action } from '@/store/constants'

export default {
  [action.LOGIN]: jest.fn(),
  [action.LOGOUT]: jest.fn(),
  [action.GET_USERS]: jest.fn(),
  [action.CREATE_USER]: jest.fn(),
  [action.GET_PRODUCTS]: jest.fn().mockReturnValue((products) => products),
  [action.CHECK_AUTH]: jest.fn(),
  [action.ADD_PRODUCT_TO_CART]: jest.fn(),
  [action.GET_PRODUCTS_FROM_STORAGE]: jest.fn(),
  [action.DELETE_PRODUCT_FROM_CART]: jest.fn(),
  [action.TOGGLE_FLASH_MESSAGE]: jest.fn(),
  [action.GET_ORDERS]: jest.fn()
}
