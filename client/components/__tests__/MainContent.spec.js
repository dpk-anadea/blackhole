import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'

import MainContent from '../MainContent'

describe('MainContent tests:', () => {
  const actions = {
    [action.GET_PRODUCTS]: jest.fn()
  }

  const store = createStore({
    useStore: () => ({
      state: {}
    }),
    actions
  })

  const wrapper = mount(MainContent, {
    global: {
      plugins: [store]
    }
  })

  it('get product', async () => {
    expect(wrapper.text()).toMatch('1.1GB')
    expect(actions[action.GET_PRODUCTS]).toHaveBeenCalled()
  })
})
