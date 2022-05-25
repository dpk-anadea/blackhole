import { mount } from '@vue/test-utils'
import { action } from '@/store/constants'
import { router } from '@/router/__mocks__/router'
import actions from '@/store/__mocks__/actions'
import mockState from '@/store/__mocks__/state'
import { createNewStore } from '@/lib/test-helpers'

import LoginForm from '@/components/forms/LoginForm'

describe('LoginForm component', () => {
  const store = createNewStore()
  const wrapper = mount(LoginForm, {
    global: {
      plugins: [router, store]
    }
  })
  describe('when all fields are filled in', () => {
    it('should trigger the actions after pressing the button', async () => {
      expect(wrapper.findAll('.input')).toHaveLength(2)

      await wrapper.find('[data-test="email"]').setValue(mockState.email)
      await wrapper.find('[data-test="password"]').setValue(mockState.password)
      await wrapper.find('.button').trigger('submit')

      expect(actions[action.LOGIN]).toHaveBeenCalled()
    })
  })
})
