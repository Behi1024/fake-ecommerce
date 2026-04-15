function CartSummary({ items, onClear }) {
  const itemsTotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <aside className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.06)]">
      <h2 className="mb-6 text-2xl font-bold text-[#111111]">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-[#6B7280]">
          <span>Items total</span>
          <span>{itemsTotal.toFixed(2)} €</span>
        </div>

        <div className="flex items-center justify-between text-[#6B7280]">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex items-center justify-between text-[#6B7280]">
          <span>Discount</span>
          <span>—</span>
        </div>

        <div className="border-t border-[#E5E7EB] pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#111111]">Total</span>
            <span className="text-2xl font-bold text-[#111111]">
              {itemsTotal.toFixed(2)} €
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <button className="btn h-12 w-full border-none bg-[#FF5A1F] text-white hover:bg-[#E14E19]">
          Checkout
        </button>

        <button
          onClick={onClear}
          className="btn h-12 w-full border border-[#E5E7EB] bg-white text-[#111111] hover:bg-[#F9FAFB]"
        >
          Clear cart
        </button>
      </div>
    </aside>
  )
}

export default CartSummary