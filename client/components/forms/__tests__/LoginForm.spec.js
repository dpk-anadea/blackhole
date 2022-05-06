import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'
import { router } from '@/components/__mocks__/router'
import { store, actions } from '@/components/__mocks__/store'

import LoginForm from '@/components/forms/LoginForm'

const wrapper = mount(LoginForm, {
  global: {
    plugins: [router, store]
  }
})

describe('LoginForm component', () => {
  it('should displayed two input fields', async () => {
    expect(wrapper.findAll('.input')).toHaveLength(2)
  })

  describe('should trigger the actions after pressing the button', () => {
    it('if all fields are filled in', async () => {
      await wrapper.find('#email').setValue(store.state.email)
      await wrapper.find('#password').setValue(store.state.password)
      await wrapper.find('.button').trigger('submit')

      expect(actions[action.LOGIN]).toHaveBeenCalled()
    })
  })
})
