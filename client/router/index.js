import { createRouter, createWebHistory } from 'vue-router'
import guards from './guards'

import HomePage from '@/views/HomePage'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
import ProductsView from '@/views/ProductsView'
import ProductView from '@/views/ProductView'
import EmailVerifyView from '@/views/EmailVerifyView'
import CartView from '@/views/CartView'

const routes = [
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
        component: EmailVerifyView,
    },
    {
        name: 'Cart',
        path: '/cart',
        component: CartView
    }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

router.beforeEach(async (to) => {
  return await guards.redirection(to)
})

export { routes }

export default router
