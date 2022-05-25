import userFactory from '@factory/user.factory'
import productFactory from '@factory/product.factory'

const user = userFactory.attrs('user')
const product = productFactory.attrs('product')

export default {
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
      quantity: 1
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
      ...product,
      type: 'One-Shots',
      id: 1
    },
    {
      ...product,
      type: 'One-Shots',
      id: 2
    },
    {
      ...product,
      type: 'One-Shots',
      id: 3
    }
  ],
  currentOrder: { receipt_url: 'url', status: 'succeeded' }
}
