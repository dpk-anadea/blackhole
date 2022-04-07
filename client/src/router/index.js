import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
import ProductsView from '@/views/ProductsView'
import ProductView from '@/views/ProductView'

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
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
    }
  ]
})

export default router
