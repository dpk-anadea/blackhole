import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { h } from 'vue'
import AccountLayout from '../AccountLayout'


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const wrapper = mount(AccountLayout, {
  global: {
    plugins: [router]
  },
  props: {
    title: 'Test'
  },
  slots: {
    form: h('h1', {}, 'Named Slot')
  }
})

describe('AccountLayout tests:', () => {
  it('props', async () => {
    expect(wrapper.text()).toMatch('Test')
  })

  it('slot', async () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
  })
})
