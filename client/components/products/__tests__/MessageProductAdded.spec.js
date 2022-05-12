import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
import MessageProductAdded from '@/components/products/MessageProductAdded'

const wrapper = mount(MessageProductAdded, {
  global: {
    plugins: [store, router]
  },
  stubs: {
    ShoppingCartIcon
  }
})

describe('MessageProductAdded component', () => {
  it('should displayed ShoppingCartIcon and text "Product added to cart. View cart and check out."', async () => {
    expect(wrapper.findComponent(ShoppingCartIcon).exists()).toBe(true)
    expect(wrapper.find('.message-text').text()).toBe(
      'Product added to cart. View cart and check out.'
    )
  })
})
