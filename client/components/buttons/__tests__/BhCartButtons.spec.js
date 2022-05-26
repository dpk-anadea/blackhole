import { mount } from '@vue/test-utils'
import { router } from '@/router/__mocks__/router'
import { createNewStore } from '@/lib/test-helpers'

import BhBaseButton from '@/components/buttons/BhBaseButton'
import BhCartButtons from '@/components/buttons/BhCartButtons'

describe('BhCartButtons component', () => {
  const store = createNewStore()
  const wrapper = mount(BhCartButtons, {
    global: {
      plugins: [store, router]
    },
    stubs: {
      BhBaseButton
    }
  })

  it('should be displayed two components BhBaseButton', async () => {
    expect(wrapper.findAllComponents(BhBaseButton).length).toEqual(2)
  })
})
