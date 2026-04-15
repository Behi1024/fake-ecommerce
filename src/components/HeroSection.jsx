function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-sm">
      <div className="grid min-h-[460px] gap-0 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        
        {/* TEXT */}
        <div className="relative z-10 px-8 py-10 md:px-12 md:py-14">
          <p className="mb-6 inline-flex rounded-full bg-[#FF6A1A] px-5 py-3 text-sm font-semibold text-white shadow-md">
            Free shipping on orders over 50 €
          </p>

          <h1 className="mb-5 max-w-[560px] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#111111] md:text-6xl">
            Discover your next favorite item
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-9 text-[#4B5563]">
            Shop the latest in electronics, fashion, and more — all in one place.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn h-14 border-none bg-[#FF6A1A] px-8 text-base font-semibold text-white shadow-md hover:bg-[#E85B12]">
              Shop now
            </button>

            <button className="btn h-14 border border-[#D1D5DB] bg-white px-8 text-base font-semibold text-[#111111] hover:bg-[#F9FAFB]">
              Explore categories
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative min-h-[420px]">
          <img
            src="/images/hero/hero-main.png"
            alt="Featured products"
            className="absolute right-[-5%] top-1/2 w-[190%] max-w-none -translate-y-1/2"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection