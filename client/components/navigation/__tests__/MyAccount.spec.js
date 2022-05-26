import { mount } from '@vue/test-utils'

import MyAccount from '@/components/navigation/MyAccount'

const wrapper = mount(MyAccount)

describe('MyAccount component', () => {
  it('should be displayed the text: "My Account", "Orders", "Downloads"', () => {
    expect(wrapper.text()).toMatch('My Account')
    expect(wrapper.text()).toMatch('Orders')
    expect(wrapper.text()).toMatch('Downloads')
  })
})
