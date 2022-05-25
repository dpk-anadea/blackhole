import { mount } from '@vue/test-utils'
import mockState from '@/store/__mocks__/state'
import { router } from '@/router/__mocks__/router'

import RegisterForm from '@/components/forms/RegisterForm'

describe('RegisterForm component', () => {
  const wrapper = mount(RegisterForm, {
    global: {
      plugins: [router]
    }
  })

  describe('when you click on the button', () => {
    it('should six input fields and all the input fields are filled in and correct, emit will work', async () => {
      expect(wrapper.findAll('.input')).toHaveLength(6)

      await wrapper
        .find('[data-test="first-name"]')
        .setValue(mockState.firstName)
      await wrapper.find('[data-test="last-name"]').setValue(mockState.lastName)
      await wrapper.find('[data-test="phone"]').setValue(mockState.phoneNumber)
      await wrapper.find('[data-test="email"]').setValue(mockState.email)
      await wrapper.find('[data-test="password"]').setValue(mockState.password)
      await wrapper
        .find('[data-test="confirm-password"]')
        .setValue(mockState.confirmPassword)

      await wrapper.find('.button').trigger('submit')

      expect(wrapper.emitted()).toHaveProperty('submit')
    })
  })
})
