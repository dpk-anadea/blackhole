import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import BhBaseButton from '@/components/buttons/BhBaseButton'
import BhSpinner from '@/components/BhSpinner'

const createWrapper = (store) =>
  mount(BhBaseButton, {
    global: {
      plugins: [store]
    },
    slots: {
      default: h('h1', {}, 'Named Slot')
    }
  })

describe('BhBaseButton component', () => {
  describe('when there is loading', () => {
    const store = createNewStore({ loading: true })
    const wrapper = createWrapper(store)

    it('should displayed the spinner', () => {
      expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
      expect(wrapper.findAllComponents(BhSpinner).length).toEqual(1)
    })
  })

  describe('when there is no loading', () => {
    const store = createNewStore({ loading: false })
    const wrapper = createWrapper(store)

    it('should displayed the html tag which was passed in slot', () => {
      expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
      expect(wrapper.findAllComponents(BhSpinner).length).toEqual(0)
    })
  })
})
