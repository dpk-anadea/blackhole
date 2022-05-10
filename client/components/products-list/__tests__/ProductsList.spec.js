import { mount } from '@vue/test-utils'
import { router } from '@/components/__mocks__/router'
import { store, emptyStore } from '@/components/__mocks__/store'

import ProductItem from '@/components/products-list/ProductItem'
import ProductsList from '@/components/products-list/ProductsList'

describe('ProductsList component', () => {
  describe('when we have products in the database', () => {
    it('should displayed "ProductItem" components', async () => {
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
  })

  describe('when we have no products in the database', () => {
    it('should not be displayed "ProductItem" components', async () => {
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
