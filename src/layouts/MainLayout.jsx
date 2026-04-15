import { Outlet } from "react-router-dom"
import { useEffect, useReducer } from "react"
import Navbar from "../components/Navbar"
import { cartReducer } from "../reducers/cartReducer"
import { getInitialCart, saveCart } from "../utils/cartStorage"

function MainLayout() {
  const [cartItems, dispatch] = useReducer(cartReducer, [], getInitialCart)

  useEffect(() => {
    saveCart(cartItems)
  }, [cartItems])

  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <Navbar cartItems={cartItems} />
      <div className="p-4">
        <Outlet context={{ cartItems, dispatch }} />
      </div>
    </div>
  )
}

export default MainLayout