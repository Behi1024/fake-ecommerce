function QuantityControl({ quantity }) {
  if (quantity === 0) {
    return (
      <button className="btn border-none bg-[#FF2FB3] text-white hover:bg-[#E600A8]">
        Add to cart
      </button>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#F1C4E8] bg-white text-lg text-[#1F172A] transition hover:bg-[#FFF3FB]">
        -
      </button>

      <span className="min-w-6 text-center text-sm font-semibold text-[#1F172A]">
        {quantity}
      </span>

      <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#F1C4E8] bg-white text-lg text-[#1F172A] transition hover:bg-[#FFF3FB]">
        +
      </button>
    </div>
  )
}

export default QuantityControl