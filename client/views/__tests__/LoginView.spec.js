import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import LoginView from '@/views/LoginView'
import LoginForm from '@/components/forms/LoginForm'
import AccountLayout from '@/components/layout/AccountLayout'

describe('LoginForm component', () => {
  const store = createNewStore()
  const wrapper = mount(LoginView, {
    global: { plugins: [store, router] },
    stubs: { LoginForm, AccountLayout }
  })

  it('should displayed LoginForm and AccountLayout components', async () => {
    expect(wrapper.findComponent(AccountLayout).exists()).toBe(true)
    expect(wrapper.findComponent(LoginForm).exists()).toBe(true)
  })
})
