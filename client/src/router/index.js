import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage'
import TuTu from '../components/TuTu'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/tutu',
      component: TuTu
    },
    {
      name: 'home',
      path: '/home',
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
    }
  ]
})

export default router
