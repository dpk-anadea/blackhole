import getters from '@/store/getters'
import { get } from '@/store/constants'
import { mockState } from '@/components/__mocks__/store'

describe('Getters', () => {
  it('allows to get the user', async () => {
    const actual = getters[get.CURRENT_USER](mockState)

    expect(actual).toEqual(mockState.user)
  })

  it('allows to get the authentication status', () => {
    const actual = getters[get.IS_AUTHENTICATED](mockState)

    expect(actual).toEqual(mockState.isAuth)
  })

  it('allows to get the loading status', () => {
    const actual = getters[get.LOADING](mockState)

    expect(actual).toEqual(mockState.loading)
  })

  it('allows to get the cart object', () => {
    const actual = getters[get.CART](mockState)

    expect(actual).toEqual(mockState.cart)
  })

  it('allows is show flash message', () => {
    const actual = getters[get.IS_SHOW_FLASH_MESSAGE](mockState)

    expect(actual).toEqual(mockState.isShowFleshMessage)
  })
})
