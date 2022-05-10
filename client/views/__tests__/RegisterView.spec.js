import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import RegisterView from '@/views/RegisterView'
import RegisterForm from '@/components/forms/RegisterForm'
import AccountLayout from '@/components/layout/AccountLayout'

const wrapper = mount(RegisterView, {
  global: {
    plugins: [router, store]
  },
  stubs: {
    RegisterForm,
    AccountLayout
  }
})

describe('LoginForm component', () => {
  it('should displayed RegisterForm and AccountLayout components', () => {
    expect(wrapper.findComponent(AccountLayout).exists()).toBe(true)
    expect(wrapper.findComponent(RegisterForm).exists()).toBe(true)
  })
})
