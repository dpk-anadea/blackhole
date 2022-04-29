import { routes } from '@/router/index'
import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { action } from '@/store/constants'

import LoginForm from '../LoginForm'

describe('LoginForm tests:', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  let actions = {
    [action.LOGIN]: jest.fn()
  }

  const store = createStore({
    useStore: () => ({
      dispatch: jest.fn(),
      state: {
        email: 'test@mail.ru',
        password: 'secret'
      }
    }),
    actions
  })

  const wrapper = mount(LoginForm, {
    global: {
      plugins: [router, store]
    }
  })

  it('number of fields', async () => {
    expect(wrapper.findAll('.input')).toHaveLength(2)
  })

  it('submit a login form', async () => {
    const email = 'ivanov@mail.ru'
    const password = 'secret'

    await wrapper.find('#email').setValue(email)
    await wrapper.find('#password').setValue(password)
    await wrapper.find('.button').trigger('submit')

    expect(actions[action.LOGIN]).toHaveBeenCalledWith(expect.anything(), {
      email,
      password
    })
  })
})
