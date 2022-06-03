import userFactory from '@factory/user.factory'

const user = userFactory.attrs('user')
const product = {
  id: 1,
  name: 'Product-1',
  type: 'test',
  cost: 1100,
  download_link: 'link',
  description: 'test@mail.ru'
}
const orderItems = [
  {
    order_id: 1,
    product_id: 1,
    product,
    cost: 200,
    quantity: 1
  }
]
const order = { user_id: 1, total_cost: 100, orderItems }

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
  product: product,
  cart: [
    {
      ...product,
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
  orders: [
    {
      ...order,
      id: 1
    },
    {
      ...order,
      id: 2
    }
  ],
  currentOrder: { receipt_url: 'url', status: 'succeeded' }
}
