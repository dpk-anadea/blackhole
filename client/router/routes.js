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
import ForgotPasswordView from '@/views/ForgotPasswordView'
import ResetPasswordView from '@/views/ResetPasswordView'

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterView
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginView
  },
  {
    name: 'Products',
    path: '/products',
    component: ProductsView
  },
  {
    name: 'Product',
    path: '/products/:productId',
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
  },
  {
    name: 'ResetPassword',
    path: '/reset',
    component: ForgotPasswordView
  },
  {
    name: 'ChangePassword',
    path: '/change-password/:resetLink',
    component: ResetPasswordView
  }
]
