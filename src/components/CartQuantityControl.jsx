function CartQuantityControl({ quantity, onAdd, onDecrease }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrease}
        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-lg text-[#111111] transition hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
      >
        -
      </button>

      <span className="min-w-6 text-center text-sm font-semibold text-[#111111]">
        {quantity}
      </span>

      <button
        onClick={onAdd}
        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-lg text-[#111111] transition hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
      >
        +
      </button>
    </div>
  )
}

export default CartQuantityControl