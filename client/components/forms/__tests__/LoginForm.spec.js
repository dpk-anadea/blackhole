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
  describe('when all fields are filled in', () => {
    it('should trigger the actions after pressing the button', async () => {
      expect(wrapper.findAll('.input')).toHaveLength(2)

      await wrapper.find('[data-test="email"]').setValue(store.state.email)
      await wrapper
        .find('[data-test="password"]')
        .setValue(store.state.password)
      await wrapper.find('.button').trigger('submit')

      expect(actions[action.LOGIN]).toHaveBeenCalled()
    })
  })
})
