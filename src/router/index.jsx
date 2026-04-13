import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
])

export default router