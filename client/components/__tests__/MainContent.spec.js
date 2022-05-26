import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'
import state from '@/store/state'
import actions from '@/store/__mocks__/actions'
import { createNewStore } from '@/lib/test-helpers'

import MainContent from '@/components/MainContent'
import ProductItem from '@/components/products/ProductItem'

describe('MainContent component', () => {
  describe('when the page gets an empty object', () => {
    it('should display text "Products are not available!" on the page', async () => {
      const store = createNewStore(state)
      const wrapper = mount(MainContent, {
        global: { plugins: [store] }
      })

      expect(wrapper.text()).toMatch('Products are not available!')
    })

    describe('when the page gets an object with products', () => {
      it('should display "ProductItem" components on the page', async () => {
        const store = createNewStore()
        const wrapper = mount(MainContent, {
          global: { plugins: [store] },
          stubs: { ProductItem }
        })

        expect(actions[action.GET_PRODUCTS]).toHaveBeenCalled()
        expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(
          3
        )
      })
    })
  })
})
