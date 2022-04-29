import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import LoginView from '../LoginView'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'

describe('LoginForm tests:', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  const store = createStore({
    useStore: () => ({
      state: {
        isAuth: true
      }
    })
  })

  const wrapper = mount(LoginView, {
    global: {
      plugins: [router, store]
    }
  })

  it('check component', async () => {
    expect(wrapper.text()).toMatch('Sing In')
  })
})
