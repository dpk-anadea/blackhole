import { h } from 'vue'
import { mount } from '@vue/test-utils'

import BhBaseButton from '@/components/buttons/BhBaseButton'

const wrapper = mount(BhBaseButton, {
  slots: {
    default: h('h1', {}, 'Named Slot')
  }
})

describe('BhBaseButton component', () => {
  it('should displayed the html tag which was passed in slot', () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
  })
})
