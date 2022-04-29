import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { action } from '@/store/constants'

import RegisterView from '../RegisterView'

describe('LoginForm tests:', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  const actions = {
    [action.CREATE_USER]: jest.fn()
  }

  const store = createStore({
    actions
  })

  const wrapper = mount(RegisterView, {
    global: {
      plugins: [router, store]
    }
  })

  it('check component', async () => {
    const registerFormData = {
      first_name: 'John',
      last_name: 'Gilbert',
      phone: '123456789',
      email: 'gilbert@mail.ru',
      password: 'secret'
    }

    await wrapper.find('#first_name').setValue(registerFormData.first_name)
    await wrapper.find('#last_name').setValue(registerFormData.last_name)
    await wrapper.find('#phone').setValue(registerFormData.phone)
    await wrapper.find('#email').setValue(registerFormData.email)
    await wrapper.find('#password').setValue(registerFormData.password)

    await wrapper.find('.button').trigger('submit')

    expect(actions[action.CREATE_USER]).toHaveBeenCalledWith(
      expect.anything(),
      registerFormData
    )
  })
})
