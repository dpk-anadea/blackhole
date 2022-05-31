import HomePage from '@/views/HomePage'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
import ProductsView from '@/views/ProductsView'
import ProductView from '@/views/ProductView'
import EmailVerifyView from '@/views/EmailVerifyView'
import CartView from '@/views/CartView'
import ThanksForBuyView from '@/views/ThanksForBuyView'
import OrdersView from '@/views/OrdersView'
import OrderView from '@/views/OrderView'
import DownloadsView from '@/views/DownloadsView'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterView
  },
  {
    name: 'login',
    path: '/login',
    component: LoginView
  },
  {
    name: 'products',
    path: '/products',
    component: ProductsView
  },
  {
    name: 'product',
    path: '/product',
    component: ProductView
  },
  {
    name: 'EmailVerify',
    path: '/email-verify',
    component: EmailVerifyView
  },
  {
    name: 'Cart',
    path: '/cart',
    component: CartView
  },
  {
    name: 'ThanksForBuy',
    path: '/thanks-for-buy',
    component: ThanksForBuyView
  },
  {
    name: 'Orders',
    path: '/orders',
    component: OrdersView
  },
  {
    name: 'Order',
    path: '/order',
    component: OrderView
  },
  {
    name: 'Downloads',
    path: '/downloads',
    component: DownloadsView
  }
]
