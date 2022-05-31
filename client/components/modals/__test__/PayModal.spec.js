import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import PayModal from '@/components/modals/PayModal'
import BaseModal from '@/components/modals/BaseModal'
import productFactory from '@factory/product.factory'

describe('PayModal component', () => {
  const store = createNewStore()
  const wrapper = mount(PayModal, {
    global: { plugins: [store] },
    props: {
      products: [productFactory.attrs('product')],
      totalCost: 100
    },
    stubs: { BaseModal }
  })

  it('should displayed the "BaseModal" component', () => {
    expect(wrapper.text()).toMatch('Pay with card')
    expect(wrapper.findComponent({ name: 'BaseModal' }).exists()).toBe(true)
  })
})
