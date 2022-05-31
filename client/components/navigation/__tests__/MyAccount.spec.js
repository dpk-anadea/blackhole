import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'

import MyAccount from '@/components/navigation/MyAccount'

const wrapper = mount(MyAccount, {
  global: { plugins: [router] }
})

describe('MyAccount component', () => {
  it('should be displayed the text: "My Account", "My Orders", "My Downloads"', () => {
    expect(wrapper.text()).toMatch('My Account')
    expect(wrapper.text()).toMatch('My Orders')
    expect(wrapper.text()).toMatch('My Downloads')
  })
})
