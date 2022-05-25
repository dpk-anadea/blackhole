import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import RegisterView from '@/views/RegisterView'
import RegisterForm from '@/components/forms/RegisterForm'
import AccountLayout from '@/components/layout/AccountLayout'

describe('LoginForm component', () => {
  const store = createNewStore()
  const wrapper = mount(RegisterView, {
    global: { plugins: [router, store] },
    stubs: { RegisterForm, AccountLayout }
  })

  it('should displayed RegisterForm and AccountLayout components', () => {
    expect(wrapper.findComponent(AccountLayout).exists()).toBe(true)
    expect(wrapper.findComponent(RegisterForm).exists()).toBe(true)
  })
})
