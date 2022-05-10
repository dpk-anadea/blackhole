import mutations from '@/store/mutations'
import { mutator } from '@/store/constants'
import { store, emptyStore } from '@/components/__mocks__/store'

describe('Mutations', () => {
  it('allows to add all users to an empty state', async () => {
    mutations[mutator.SET_USERS](emptyStore.state, store.state.users)
    expect(emptyStore.state.users).toEqual(store.state.users)
  })

  it('allows to add user to an empty state', async () => {
    mutations[mutator.SET_USER](emptyStore.state, store.state.user)
    expect(emptyStore.state.user).toEqual(store.state.user)
  })

  it('allows to add an authentication status', () => {
    mutations[mutator.SET_AUTH](emptyStore.state, store.state.isAuth)
    expect(emptyStore.state.isAuth).toEqual(store.state.isAuth)
  })

  it('allows to add a loading status', () => {
    mutations[mutator.SET_LOADING](emptyStore.state, store.state.loading)
    expect(emptyStore.state.loading).toEqual(store.state.loading)
  })

  it('allows to add a products an empty state', async () => {
    mutations[mutator.SET_PRODUCTS](emptyStore.state, store.state.products)
    expect(emptyStore.state.products).toEqual(store.state.products)
  })
})
