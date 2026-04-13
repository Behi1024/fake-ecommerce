function HeroSection() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-[#FFF3FB] to-[#FFE1F5] px-8 py-10 shadow-sm md:px-12 md:py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm text-[#7C3A64] shadow-sm">
            Free shipping on orders over 50 €
          </p>

          <h1 className="mb-4 max-w-xl text-4xl font-bold leading-tight text-[#1F172A] md:text-6xl">
            Find your next favorite piece
          </h1>

          <p className="mb-8 max-w-lg text-base leading-7 text-[#6B7280] md:text-lg">
            Soft, stylish, playful shopping experience with a modern premium
            look.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn border-none bg-[#FF2FB3] px-6 text-white shadow-md hover:bg-[#E600A8]">
              Shop now
            </button>

            <button className="btn border border-[#F1C4E8] bg-white px-6 text-[#1F172A] hover:bg-[#FFF3FB]">
              Explore categories
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-56 w-56 rounded-full bg-[#FFD6F4] blur-3xl md:h-72 md:w-72"></div>

          <div className="relative grid w-full max-w-md grid-cols-2 gap-4">
            <div className="rounded-[28px] bg-white p-4 shadow-md">
              <img
                src="/images/hero/hero-bag.png"
                alt="fashion bag"
                className="h-56 w-full object-contain"
              />
            </div>

            <div className="mt-10 rounded-[28px] bg-white p-4 shadow-md">
              <img
                src="/images/hero/hero-shoes.png"
                alt="fashion shoes"
                className="h-56 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection