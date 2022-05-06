import { mount } from '@vue/test-utils'
import { router } from '@/components/__mocks__/router'
import { store, emptyStore } from '@/components/__mocks__/store'

import ProductsList from '@/components/products-list/ProductsList'
import ProductItem from '@/components/products-list/ProductItem'

describe('ProductsList component', () => {
  describe('should displayed product items', () => {
    it('if we have products in the database', async () => {
      const wrapper = mount(ProductsList, {
        global: {
          plugins: [store, router]
        },
        stubs: {
          ProductItem
        }
      })

      expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(3)
    })

    it('if we have no products in the database', async () => {
      const wrapper = mount(ProductsList, {
        global: {
          plugins: [emptyStore, router]
        },
        stubs: {
          ProductItem
        }
      })

      expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(0)
    })
  })
})
