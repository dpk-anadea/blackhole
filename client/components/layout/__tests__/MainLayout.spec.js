import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import MainLayout from '@/components/layout/MainLayout'
import MainFooter from '@/components/navigation/MainFooter'
import MainHeader from '@/components/navigation/MainHeader'

const wrapper = mount(MainLayout, {
  global: {
    plugins: [router, store]
  },
  slots: {
    'main-content': h('h1', {}, 'Named Slot')
  },
  stubs: {
    MainFooter,
    MainHeader
  }
})

describe('MainLayout component', () => {
  it('should displayed the html tag which was passed in slot and the header and footer components', async () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
    expect(wrapper.findAllComponents({ name: 'MainFooter' }).length).toBe(1)
    expect(wrapper.findAllComponents({ name: 'MainHeader' }).length).toBe(1)
  })
})
