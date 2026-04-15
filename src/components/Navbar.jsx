import { Link } from "react-router-dom"

function Navbar({ cartItems }) {
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-4 py-5 md:px-6">
        <Link
          to="/"
          className="text-4xl font-extrabold tracking-[-0.03em] text-[#FF6A1A] md:text-[2.2rem]"
        >
          FakeShop
        </Link>

        <div className="hidden w-full max-w-xl md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="h-14 w-full rounded-full border border-[#E5E7EB] bg-white px-6 text-base text-[#111111] outline-none transition focus:border-[#FF6A1A] focus:ring-2 focus:ring-[#FFE0D1]"
          />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-lg font-semibold text-[#111111] transition hover:text-[#FF6A1A]"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-lg font-semibold text-[#111111] transition hover:text-[#FF6A1A]"
          >
            Cart
            <span className="flex h-7 min-w-[28px] items-center justify-center rounded-full bg-[#FF6A1A] px-2 text-sm font-bold text-white">
              {totalCartCount}
            </span>
          </Link>
        </nav>
      </div>

      <div className="px-4 pb-4 md:hidden">
        <input
          type="text"
          placeholder="Search products..."
          className="h-12 w-full rounded-full border border-[#E5E7EB] bg-white px-5 text-sm text-[#111111] outline-none focus:border-[#FF6A1A]"
        />
      </div>
    </header>
  )
}

export default Navbar