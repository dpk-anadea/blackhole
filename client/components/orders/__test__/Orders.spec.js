import state from '@/store/state'
import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import Orders from '@/components/orders/Orders'

describe('Orders component', () => {
  const createWrapper = (store) =>
    mount(Orders, {
      global: {
        plugins: [store]
      }
    })

  describe('when there are orders', () => {
    it('should displayed the order section fields', async () => {
      const store = createNewStore()
      const wrapper = createWrapper(store)

      expect(wrapper.findAll('.order-section')).toHaveLength(2)
    })
  })

  describe('when there are not orders', () => {
    it('should not displayed the order section fields and should displayed text "You have not placed any orders yet."', async () => {
      const store = createNewStore(state)
      const wrapper = createWrapper(store)

      expect(wrapper.findAll('.order-section')).toHaveLength(0)
      expect(wrapper.text()).toMatch("You haven't placed any orders yet.")
    })
  })
})
