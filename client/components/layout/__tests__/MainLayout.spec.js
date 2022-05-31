import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import MainLayout from '@/components/layout/MainLayout'
import MainFooter from '@/components/navigation/MainFooter'
import MainHeader from '@/components/navigation/MainHeader'

describe('MainLayout component', () => {
  const store = createNewStore()
  const wrapper = mount(MainLayout, {
    global: { plugins: [router, store] },
    slots: { 'main-content': h('h1', {}, 'Named Slot') },
    stubs: {
      MainFooter,
      MainHeader
    }
  })

  it('should displayed the html tag which was passed in slot and the header and footer components', async () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
    expect(wrapper.findAllComponents({ name: 'MainFooter' }).length).toBe(1)
    expect(wrapper.findAllComponents({ name: 'MainHeader' }).length).toBe(1)
  })
})
