import { mount } from '@vue/test-utils'
import MainFooter from '../MainFooter'

const wrapper = mount(MainFooter)

describe('MainFooter:', () => {
  it('directive v-for', () => {
    expect(wrapper.findAll('.cymantics-item')).toHaveLength(4)
    expect(wrapper.text()).toMatch('Privacy Policy')
  })
})
