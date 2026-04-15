import QuantityControl from "./QuantityControl"

function ProductCard({ product, quantity, onAdd, onDecrease }) {
  return (
    <article className="rounded-[24px] border border-[#E5E7EB] bg-white p-3 shadow-[0_8px_24px_rgba(17,17,17,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
      <div className="mb-4 flex h-56 items-center justify-center overflow-hidden rounded-[18px] bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="h-[92%] w-[92%] object-contain"
        />
      </div>

      <div className="mb-3">
        <span className="inline-flex rounded-full bg-[#FFF1EB] px-3 py-1 text-xs font-medium text-[#C2410C]">
          {product.category}
        </span>
      </div>

      <h2 className="mb-2 min-h-[56px] text-[1.35rem] font-semibold leading-7 text-[#111111]">
        {product.title}
      </h2>

      <p className="mb-4 text-[2rem] font-bold tracking-[-0.02em] text-[#111111]">
        {product.price.toFixed(2)} €
      </p>

      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-[#6B7280]">
          {quantity > 0 ? "In cart" : "Ready to shop"}
        </span>

        <QuantityControl
          quantity={quantity}
          onAdd={onAdd}
          onDecrease={onDecrease}
        />
      </div>
    </article>
  )
}

export default ProductCard