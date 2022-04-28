import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import { h } from 'vue'
import { createStore } from 'vuex'

import MainLayout from '../MainLayout'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const store = createStore({
  useStore: () => ({
    dispatch: jest.fn(),
    state: {
      isAuth: true
    }
  })
})

const wrapper = mount(MainLayout, {
  global: {
    plugins: [router, store]
  },
  slots: {
    'main-content': h('h1', {}, 'Named Slot')
  }
})

describe('MainLayout tests:', () => {
  it('slot', async () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
  })
})
