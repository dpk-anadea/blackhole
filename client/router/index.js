import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import guards from './guards'

export const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

router.beforeEach(async (to) => {
  return await guards.redirection(to)
})
