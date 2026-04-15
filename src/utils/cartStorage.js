const CART_STORAGE_KEY = "fakeShopCart"

export function getInitialCart() {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY)

  if (!savedCart) {
    return []
  }

  try {
    return JSON.parse(savedCart)
  } catch (error) {
    console.error("Could not parse cart from localStorage:", error)
    return []
  }
}

export function saveCart(cartItems) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
}