import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import ThanksForBuyModal from '@/components/modals/ThanksForBuyModal'
import BaseModal from '@/components/modals/BaseModal'

describe('ThanksForBuyModal component', () => {
  const store = createNewStore()
  const wrapper = mount(ThanksForBuyModal, {
    global: { plugins: [store] },
    stubs: { BaseModal }
  })

  it('should displayed the "BaseModal" component', () => {
    expect(wrapper.text()).toMatch('Thank you for buy')
    expect(wrapper.findComponent({ name: 'BaseModal' }).exists()).toBe(true)
  })
})