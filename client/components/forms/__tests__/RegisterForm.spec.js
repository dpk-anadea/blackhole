import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import RegisterForm from '@/components/forms/RegisterForm'

const wrapper = mount(RegisterForm, {
  global: {
    plugins: [router, store]
  }
})

describe('RegisterForm component', () => {
  it('should displayed six input fields', async () => {
    expect(wrapper.findAll('.input')).toHaveLength(6)
  })

  describe('when you click on the button', () => {
    it('if all the input fields are filled in and correct, emit will work', async () => {
      await wrapper
        .find('[data-test="first-name"]')
        .setValue(store.state.firstName)
      await wrapper
        .find('[data-test="last-name"]')
        .setValue(store.state.lastName)
      await wrapper
        .find('[data-test="phone"]')
        .setValue(store.state.phoneNumber)
      await wrapper.find('[data-test="email"]').setValue(store.state.email)
      await wrapper
        .find('[data-test="password"]')
        .setValue(store.state.password)
      await wrapper
        .find('[data-test="confirm-password"]')
        .setValue(store.state.confirmPassword)

      await wrapper.find('.button').trigger('submit')

      expect(wrapper.emitted()).toHaveProperty('submit')
    })
  })
})
