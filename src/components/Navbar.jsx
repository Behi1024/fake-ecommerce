import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#F1C4E8] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-4 py-4 md:px-6">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#FF2FB3]">
          FakeShop
        </Link>

        {/* Search */}
        <div className="hidden w-full max-w-md md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-[#F1C4E8] bg-white px-5 py-3 text-sm text-[#1F172A] outline-none transition focus:border-[#FF2FB3] focus:ring-2 focus:ring-[#FFD6F4]"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-[#1F172A] transition hover:text-[#FF2FB3]"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-sm font-medium text-[#1F172A] transition hover:text-[#FF2FB3]"
          >
            Cart

            {/* Badge */}
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#FF2FB3] px-1 text-xs text-white">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-4 md:hidden">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-full border border-[#F1C4E8] bg-white px-5 py-3 text-sm text-[#1F172A] outline-none focus:border-[#FF2FB3]"
        />
      </div>
    </header>
  )
}

export default Navbar