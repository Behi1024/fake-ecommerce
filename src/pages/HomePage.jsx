import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import CategoryPills from "../components/CategoryPills"
import ProductCard from "../components/ProductCard"
import { CART_ACTIONS } from "../reducers/cartReducer"

function HomePage() {
  const { cartItems, dispatch } = useOutletContext()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://fakestoreapi.com/products/categories"),
        ])

        const productsData = await productsRes.json()
        const categoriesData = await categoriesRes.json()

        setProducts(productsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  function getProductQuantity(productId) {
    const cartItem = cartItems.find((item) => item.id === productId)
    return cartItem ? cartItem.quantity : 0
  }

  function handleAddToCart(product) {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: product,
    })
  }

  function handleDecreaseFromCart(productId) {
    dispatch({
      type: CART_ACTIONS.DECREASE_ITEM,
      payload: productId,
    })
  }

  // ✨ فیلتر محصولات
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-6 md:px-6 md:py-8">
      <HeroSection />

      <CategoryPills
        categories={["all", ...categories]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <section className="mt-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#1F172A]">
            Featured products
          </h2>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getProductQuantity(product.id)}
                onAdd={() => handleAddToCart(product)}
                onDecrease={() => handleDecreaseFromCart(product.id)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default HomePage