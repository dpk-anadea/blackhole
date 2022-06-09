import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import guards from './guards'

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes
})

router.beforeEach(async (to) => {
  return await guards.redirection(to)
})

export default router
