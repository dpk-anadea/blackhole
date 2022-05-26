import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import PlusIcon from '@/components/icons/PlusIcon'
import MinusIcon from '@/components/icons/MinusIcon'
import BhCountControl from '@/components/buttons/BhCountControl'

describe('BhCartButtons component', () => {
  let store, wrapper
  beforeEach(() => {
    store = createNewStore()
    wrapper = mount(BhCountControl, {
      global: { plugins: [store, router] },
      props: { count: 2 },
      stubs: { PlusIcon, MinusIcon }
    })
  })

  describe('when adding a positive value from the keyboard', () => {
    it('should work "update-count" emit function', async () => {
      await wrapper.find('[data-test="count"]').setValue('10')

      await wrapper.find('[data-test="count"]').trigger('blur')

      expect(wrapper.emitted()).toHaveProperty('update-count', [[10]])
    })
  })

  describe('when adding 0 in the input field', () => {
    it('should work "remove-product" emit function', async () => {
      await wrapper.find('[data-test="count"]').setValue('0')

      await wrapper.find('[data-test="count"]').trigger('blur')

      expect(wrapper.emitted()).toHaveProperty('remove-product')
    })
  })

  describe('when adding the negative value in input field', () => {
    it('should not work emit function', async () => {
      await wrapper.find('[data-test="count"]').setValue('-1')

      await wrapper.find('[data-test="count"]').trigger('blur')

      expect(wrapper.emitted()).not.toHaveProperty([[]])
    })
  })

  describe('when one click on the plus button', () => {
    it('should be displayed PlusIcon component and work "update-count" emit function', async () => {
      expect(wrapper.findComponent(PlusIcon).exists()).toBe(true)

      await wrapper.findComponent(PlusIcon).trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update-count')
    })
  })

  describe('when one click on the minus button', () => {
    it('should be displayed MinusIcon component and work "update-count" emit function', async () => {
      expect(wrapper.findComponent(MinusIcon).exists()).toBe(true)

      await wrapper.findComponent(MinusIcon).trigger('click')
      expect(wrapper.emitted()).toHaveProperty('update-count')
    })
  })
})
