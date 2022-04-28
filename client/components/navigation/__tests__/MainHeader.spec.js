import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import MainHeader from '../MainHeader'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'

describe('MainHeader:', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

  const store = createStore({
    useStore: () => ({
      state: {
        isAuth: false
      }
    })
  })

  const wrapper = mount(MainHeader, {
    global: {
      plugins: [router, store]
    }
  })

  it('there a link', () => {
    expect(wrapper.text()).toMatch('Login')
  })
})
