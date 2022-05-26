import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'
import state from '@/store/state'

import ProductItem from '@/components/products/ProductItem'
import ProductsList from '@/components/products/ProductsList'

describe('ProductsList component', () => {
  const createWrapper = (store) =>
    mount(ProductsList, {
      global: {
        plugins: [store, router]
      },
      stubs: {
        ProductItem
      }
    })

  describe('when we have products in the database', () => {
    it('should displayed "ProductItem" components', async () => {
      const store = createNewStore()
      const wrapper = createWrapper(store)

      expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(3)
    })
  })

  describe('when we have no products in the database', () => {
    it('should not be displayed "ProductItem" components', async () => {
      const store = createNewStore(state)
      const wrapper = createWrapper(store)

      expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(0)
    })
  })
})
