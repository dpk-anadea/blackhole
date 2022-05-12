import state from '@/store/state'
import mutations from '@/store/mutations'
import { mutator } from '@/store/constants'
import { mockState } from '@/components/__mocks__/store'

describe('Mutations', () => {
  it('allows to add all users to an empty state', async () => {
    mutations[mutator.SET_USERS](state, mockState.users)
    expect(state.users).toEqual(mockState.users)
  })

  it('allows to add user to an empty state', async () => {
    mutations[mutator.SET_USER](state, mockState.user)
    expect(state.user).toEqual(mockState.user)
  })

  it('allows to add an authentication status', async () => {
    mutations[mutator.SET_AUTH](state, mockState.isAuth)
    expect(state.isAuth).toEqual(mockState.isAuth)
  })

  it('allows to add a loading status', async () => {
    mutations[mutator.SET_LOADING](state, mockState.loading)
    expect(state.loading).toEqual(mockState.loading)
  })

  it('allows to add a products an empty state', async () => {
    mutations[mutator.SET_PRODUCTS](state, mockState.products)
    expect(state.products).toEqual(mockState.products)
  })

  describe('when to adding products to the shopping cart', () => {
    describe('when the current product is not in the shopping cart', () => {
      it('the product must be added to the basket array and add "count: 1" th the product object', async () => {
        mutations[mutator.SET_PRODUCT_TO_CART](state, mockState.product)
        expect(state.cart).toEqual(mockState.cart)
      })
    })

    describe('when the current product is in the shopping cart and adding the product without count', () => {
      it('the count should be increased by 1 "count: 2"', async () => {
        mutations[mutator.SET_PRODUCT_TO_CART](mockState, mockState.product)
        expect(mockState.cart[0].count).toEqual(2)
      })
    })

    describe('when the current product is in the shopping cart and adding the product with count', () => {
      it('the count should be increased by 1 "count: 2"', async () => {
        const product = { ...mockState.product, count: 4 }

        mutations[mutator.SET_PRODUCT_TO_CART](mockState, product)
        expect(mockState.cart[0]).toEqual(product)
      })
    })
  })

  it('allows to add products to cart', async () => {
    const result = [...state.cart, ...mockState.products]

    mutations[mutator.SET_PRODUCTS_TO_CART](state, mockState.products)
    expect(state.cart).toEqual(result)
  })

  it('allows to add product to cart by id', () => {
    const productId = String(mockState.product.id)

    mutations[mutator.SET_PRODUCTS_TO_CART_BY_ID](mockState, productId)
    expect(mockState.cart.length).toBe(2)
  })

  it('allows to remove product from cart', () => {
    const productId = String(mockState.product.id)

    mutations[mutator.REMOVE_PRODUCT_FROM_CART](mockState, productId)

    jest.mock('js-cookie', () => jest.fn())
  })

  it('allows to adding flash message on the display', () => {
    mutations[mutator.SET_FLASH_MESSAGE](state, mockState.isShowFleshMessage)
    expect(state.isShowFleshMessage).toEqual(mockState.isShowFleshMessage)
  })
})
