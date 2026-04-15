export const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  DECREASE_ITEM: "DECREASE_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_CART: "CLEAR_CART",
}

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const product = action.payload
      const existingItem = state.find((item) => item.id === product.id)

      if (existingItem) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...state, { ...product, quantity: 1 }]
    }

    case CART_ACTIONS.DECREASE_ITEM: {
      const productId = action.payload

      return state
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const productId = action.payload
      return state.filter((item) => item.id !== productId)
    }

    case CART_ACTIONS.CLEAR_CART:
      return []

    default:
      return state
  }
}