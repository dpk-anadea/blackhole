import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import Order from '@/components/orders/Order'

describe('Orders component', () => {
  const createWrapper = (store) =>
    mount(Order, {
      global: {
        plugins: [store]
      },
      computed: {
        orderId() {
          return 1
        }
      }
    })

  describe('when there are orders', () => {
    it('should displayed the order section fields', async () => {
      const store = createNewStore()
      const wrapper = createWrapper(store)

      expect(wrapper.findAll('.order-section')).toHaveLength(2)
    })
  })
})
