import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'
import { store, emptyStore, actions } from '@/components/__mocks__/store'

import MainContent from '@/components/MainContent'
import ProductItem from '@/components/products/ProductItem'

describe('MainContent component', () => {
  describe('when the page gets an empty object', () => {
    it('should display text "Products are not available!" on the page', async () => {
      const wrapper = mount(MainContent, {
        global: {
          plugins: [emptyStore]
        }
      })
      expect(wrapper.text()).toMatch('Products are not available!')
    })

    describe('when the page gets an object with products', () => {
      it('should display "ProductItem" components on the page', async () => {
        const wrapper = mount(MainContent, {
          global: {
            plugins: [store]
          },
          stubs: {
            ProductItem
          }
        })

        expect(actions[action.GET_PRODUCTS]).toHaveBeenCalled()
        expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(
          3
        )
      })
    })
  })
})
