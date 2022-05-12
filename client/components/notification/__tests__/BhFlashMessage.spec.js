import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'
import { router } from '@/components/__mocks__/router'
import { actions, store } from '@/components/__mocks__/store'

import IconCross from '@/components/icons/IconCross'
import BhFlashMessage from '@/components/notification/BhFlashMessage'
import MessageProductAdded from '@/components/products/MessageProductAdded'

const wrapper = mount(BhFlashMessage, {
  global: {
    plugins: [store, router]
  },
  slots: {
    default: MessageProductAdded
  },
  stubs: {
    IconCross,
    MessageProductAdded
  }
})

describe('BhCartButtons component', () => {
  describe('when displayed component and clicking on the IconCross', () => {})
  it('should displayed MessageProductAdded and IconCross components and the BhCartButtons component should close', async () => {
    expect(wrapper.findComponent(MessageProductAdded).exists()).toBe(true)
    expect(wrapper.findComponent(IconCross).exists()).toBe(true)

    await wrapper.findComponent(IconCross).trigger('click')

    expect(actions[action.TOGGLE_FLASH_MESSAGE]).toHaveBeenCalled()
  })
})
