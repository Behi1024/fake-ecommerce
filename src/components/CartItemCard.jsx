import CartQuantityControl from "./CartQuantityControl"

function CartItemCard({ item, onAdd, onDecrease }) {
  const lineTotal = item.price * item.quantity

  return (
    <article className="rounded-[28px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(17,17,17,0.05)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[22px] bg-[#F9FAFB] p-3">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <span className="mb-2 inline-flex w-fit rounded-full bg-[#FFF1EB] px-3 py-1 text-xs font-medium text-[#C2410C]">
              {item.category}
            </span>

            <h2 className="mb-2 text-lg font-semibold leading-6 text-[#111111]">
              {item.title}
            </h2>

            <p className="text-sm text-[#6B7280]">
              Unit price: {item.price.toFixed(2)} €
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <CartQuantityControl
            quantity={item.quantity}
            onAdd={onAdd}
            onDecrease={onDecrease}
          />

          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-[#6B7280]">
              Line total
            </p>
            <p className="text-2xl font-bold text-[#111111]">
              {lineTotal.toFixed(2)} €
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CartItemCard