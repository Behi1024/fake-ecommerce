import HeroSection from "../components/HeroSection"
import CategoryPills from "../components/CategoryPills"
import ProductCard from "../components/ProductCard"
import mockProducts from "../data/mockProducts"

function HomePage() {
  const categories = [
  "bags",
  "men's clothing",
  "women's clothing",
  "jewelery",
]

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-6 md:px-6 md:py-8">
      <HeroSection />

      <CategoryPills categories={categories} />

      <section className="mt-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#1F172A]">
              Featured products
            </h2>
            <p className="mt-2 text-[#6B7280]">
              Clean, playful and premium catalog layout
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage