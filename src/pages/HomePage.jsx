import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import CategoryPills from "../components/CategoryPills"
import ProductCard from "../components/ProductCard"
import { CART_ACTIONS } from "../reducers/cartReducer"

function HomePage() {
  const { cartItems, dispatch } = useOutletContext()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Could not fetch products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
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

        {isLoading ? (
          <p className="text-lg text-[#6B7280]">Loading products...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
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