import { mount } from '@vue/test-utils'
import { createNewStore } from '@/lib/test-helpers'

import { h } from 'vue'
import PayModal from '@/components/modals/PayModal'

describe('PayModal component', () => {
  const store = createNewStore()
  const wrapper = mount(PayModal, {
    global: { plugins: [store] },
    slots: {
      default: h('h1', {}, 'Named Slot')
    }
  })

  it('should displayed the "Named Slot" text', () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
  })
})
