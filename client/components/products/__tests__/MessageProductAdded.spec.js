import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
import MessageProductAdded from '@/components/products/MessageProductAdded'

describe('MessageProductAdded component', () => {
  const store = createNewStore()
  const wrapper = mount(MessageProductAdded, {
    global: { plugins: [store, router] },
    stubs: { ShoppingCartIcon }
  })

  it('should displayed ShoppingCartIcon and text "Product added to cart. View cart and check out."', async () => {
    expect(wrapper.findComponent(ShoppingCartIcon).exists()).toBe(true)
    expect(wrapper.find('.message-text').text()).toBe(
      'Product added to cart. View cart and check out.'
    )
  })
})
