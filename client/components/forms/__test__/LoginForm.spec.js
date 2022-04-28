import { routes } from '@/router/index'
import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from '../LoginForm'

describe('LoginForm tests:', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  const store = createStore({
    useStore: () => ({
      dispatch: jest.fn(),
      state: {
        email: 'test@mail.ru',
        password: 'secret'
      }
    })
  })

  const wrapper = mount(LoginForm, {
    global: {
      plugins: [router, store]
    }
  })

  it('input fields', async () => {
    expect(wrapper.findAll('.input')).toHaveLength(2)
  })
})
