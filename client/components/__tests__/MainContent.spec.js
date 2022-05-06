import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'
import { store, emptyStore, actions } from '@/components/__mocks__/store'

import MainContent from '@/components/MainContent'
import ProductItem from '@/components/products-list/ProductItem'

describe('MainContent component', () => {
  describe('should display that on the page', () => {
    it('when the page gets an empty object', async () => {
      const wrapper = mount(MainContent, {
        global: {
          plugins: [emptyStore]
        }
      })
      expect(wrapper.text()).toMatch('Products are not available!')
    })

    it('when the page receives an object with products', async () => {
      const wrapper = mount(MainContent, {
        global: {
          plugins: [store]
        },
        stubs: {
          ProductItem
        }
      })
      expect(actions[action.GET_PRODUCTS]).toHaveBeenCalled()
      expect(wrapper.findAllComponents({ name: 'ProductItem' }).length).toBe(3)
    })
  })
})
