import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import LoginView from '@/views/LoginView'
import LoginForm from '@/components/forms/LoginForm'
import AccountLayout from '@/components/layout/AccountLayout'

const wrapper = mount(LoginView, {
  global: {
    plugins: [store, router]
  },
  stubs: {
    LoginForm,
    AccountLayout
  }
})

describe('LoginForm component', () => {
  it('should displayed LoginForm and AccountLayout components', async () => {
    expect(wrapper.findComponent(AccountLayout).exists()).toBe(true)
    expect(wrapper.findComponent(LoginForm).exists()).toBe(true)
  })
})
