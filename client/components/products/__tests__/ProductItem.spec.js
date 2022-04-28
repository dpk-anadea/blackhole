import { mount } from '@vue/test-utils'
import ProductItem from '../ProductItem'

const wrapper = mount(ProductItem, {
  props: {
    title: 'Test',
    description: 'Test Product Item',
    price: '$100'
  }
})

describe('ProductItem tests:', () => {
  test('props', async () => {
    expect(wrapper.find('.product-title').text()).toBe('Test')
    expect(wrapper.find('.price').text()).toBe('$100')
  })
})
