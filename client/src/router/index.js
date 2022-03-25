import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage'
import TuTu from '../components/TuTu'

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
    }
  ]
})

export default router
