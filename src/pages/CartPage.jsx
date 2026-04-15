import { useOutletContext } from "react-router-dom"
import CartItemCard from "../components/CartItemCard"
import CartSummary from "../components/CartSummary"
import { CART_ACTIONS } from "../reducers/cartReducer"

function CartPage() {
  const { cartItems, dispatch } = useOutletContext()

  function handleAddToCart(item) {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: item,
    })
  }

  function handleDecreaseFromCart(productId) {
    dispatch({
      type: CART_ACTIONS.DECREASE_ITEM,
      payload: productId,
    })
  }

  function handleClearCart() {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    })
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-6 md:px-6 md:py-8">
      <section className="mb-8">
        <p className="mb-2 text-sm font-medium text-[#C2410C]">Your shopping bag</p>
        <h1 className="text-4xl font-bold text-[#111111] md:text-5xl">
          Cart ({cartItems.length} items)
        </h1>
        <p className="mt-3 text-[#6B7280]">
          Review your selected products before checkout.
        </p>
      </section>

      {cartItems.length === 0 ? (
        <section className="rounded-[28px] border border-[#E5E7EB] bg-white p-10 text-center shadow-[0_8px_24px_rgba(17,17,17,0.05)]">
          <h2 className="text-2xl font-bold text-[#111111]">Your cart is empty</h2>
          <p className="mt-3 text-[#6B7280]">
            Add some products and come back here.
          </p>
        </section>
      ) : (
        <section className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onAdd={() => handleAddToCart(item)}
                onDecrease={() => handleDecreaseFromCart(item.id)}
              />
            ))}
          </div>

          <div className="xl:sticky xl:top-28 xl:self-start">
            <CartSummary items={cartItems} onClear={handleClearCart} />
          </div>
        </section>
      )}
    </main>
  )
}

export default CartPage