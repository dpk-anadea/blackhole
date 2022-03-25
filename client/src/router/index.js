import { createRouter, createWebHistory } from 'vue-router'

import HelloWord from '../components/HelloWorld'
import TuTu from '../components/TuTu'

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWord
    },
    {
      path: '/tutu',
      component: TuTu
    }
  ]
})

export default router