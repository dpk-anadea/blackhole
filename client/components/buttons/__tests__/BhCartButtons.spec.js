import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import BhBaseButton from '@/components/buttons/BhBaseButton'
import BhCartButtons from '@/components/buttons/BhCartButtons'

const wrapper = mount(BhCartButtons, {
  global: {
    plugins: [store, router]
  },
  stubs: {
    BhBaseButton
  }
})

describe('BhCartButtons component', () => {
  it('should be displayed two components BhBaseButton', async () => {
    expect(wrapper.findAllComponents(BhBaseButton).length).toEqual(2)
  })
})
