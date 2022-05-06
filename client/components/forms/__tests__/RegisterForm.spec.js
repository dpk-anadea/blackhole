import { mount } from '@vue/test-utils'
import { store } from '@/components/__mocks__/store'
import { router } from '@/components/__mocks__/router'

import RegisterForm from '@/components/forms/RegisterForm'

describe('RegisterForm component', () => {
  const wrapper = mount(RegisterForm, {
    global: {
      plugins: [router, store]
    }
  })

  it('should displayed six input fields', async () => {
    expect(wrapper.findAll('.input')).toHaveLength(6)
  })

  describe('when you click on the button', () => {
    it('if all the input fields are filled in and correct, emit will work', async () => {
      await wrapper.find('#first_name').setValue(store.state.firstName)
      await wrapper.find('#last_name').setValue(store.state.lastName)
      await wrapper.find('#phone').setValue(store.state.phoneNumber)
      await wrapper.find('#email').setValue(store.state.email)
      await wrapper.find('#password').setValue(store.state.password)
      await wrapper
        .find('#confirm_password')
        .setValue(store.state.confirmPassword)

      await wrapper.find('.button').trigger('submit')

      expect(wrapper.emitted()).toHaveProperty('submit')
    })
  })
})
