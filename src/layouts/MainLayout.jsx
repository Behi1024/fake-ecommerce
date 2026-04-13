import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function MainLayout() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout