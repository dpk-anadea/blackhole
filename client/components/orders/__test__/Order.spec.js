import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'
import { router } from '@/router/__mocks__/router'

import Order from '@/components/orders/Order'

describe('Orders component', () => {
  const createWrapper = (store) =>
    mount(Order, {
      global: {
        plugins: [store, router]
      }
    })

  describe('when there are orders', () => {
    it('should displayed the order section fields', async () => {
      const store = createNewStore()
      const wrapper = createWrapper(store)
      await wrapper.vm.$router.replace({
        path: '/order',
        query: { orderId: 1 }
      })

      expect(wrapper.findAll('.order-section')).toHaveLength(1)
    })
  })
})
