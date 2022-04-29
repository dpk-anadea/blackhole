import { routes } from '@/router'
import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import RegisterForm from '../RegisterForm'

describe('RegisterForm tests:', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  const store = createStore({
    useStore: () => ({
      state: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        phoneNumber: '123456789',
        email: 'test@mail.ru',
        password: 'secret',
        confirmPassword: 'secret'
      }
    })
  })

  const wrapper = mount(RegisterForm, {
    global: {
      plugins: [router, store]
    }
  })

  it('number of fields', async () => {
    expect(wrapper.findAll('.input')).toHaveLength(6)
  })

  it('emits an event when clicked', async () => {
    await wrapper.find('#first_name').setValue()
    await wrapper.find('#last_name').setValue()
    await wrapper.find('#phone').setValue()
    await wrapper.find('#email').setValue()
    await wrapper.find('#password').setValue()
    await wrapper.find('#confirm_password').setValue()

    await wrapper.find('.button').trigger('submit')

    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
