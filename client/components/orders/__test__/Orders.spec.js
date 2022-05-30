import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import Orders from '@/components/orders/Orders'
import { router } from '@/router/__mocks__/router'

describe('Orders component', () => {
  const store = createNewStore()
  const wrapper = mount(Orders, {
    global: { plugins: [store, router] }
  })

  it('should displayed the table', () => {
    expect(wrapper.findAll('.active-id-link')).toHaveLength(1)

    expect(wrapper.text()).toMatch('Id link')
    expect(wrapper.text()).toMatch('Date')
    expect(wrapper.text()).toMatch('Payment amount')
  })
})
