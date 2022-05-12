import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import PlusIcon from '@/components/icons/PlusIcon'
import MinusIcon from '@/components/icons/MinusIcon'
import BhCountControl from '@/components/buttons/BhCountControl'

const wrapper = mount(BhCountControl, {
  global: {
    plugins: [store, router]
  },
  props: {
    count: 1
  },
  stubs: {
    PlusIcon,
    MinusIcon
  }
})

describe('BhCartButtons component', () => {
  describe('when adding a positive value from the keyboard', () => {
    it('should be displayed the added value', async () => {
      await wrapper.find('[data-test="count"]').setValue('10')

      await wrapper.find('.count-control').trigger('blur')

      expect(wrapper.find('input[type="text"]').element.value).toBe('10')
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
