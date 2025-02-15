import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Book, BookPlus, Calendar, CalendarClock, ChevronRight, Home, Image, LayoutDashboard, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Drawer } from "@mui/material"
import { Separator } from "./ui/separator"

import logo from "@/assets/src.jpg"

const menuItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "About Us", icon: Book, path: "/about" },
  { name: "Contact Us", icon: BookPlus, path: "/contact" },
  { name: "Activities", icon: LayoutDashboard , path:"/activities"},
  { name: "Gallery", icon: Image , path:"/gallery"},
  // { name: "Upcoming Events", icon: CalendarClock, path: "/upcoming-events" },
]

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const location = useLocation()

  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="py-3 top-0 sticky bg-white border-b-2 z-10 sm:px-8 px-6 flex w-full justify-between items-center space-x-7">
      {/* Logo */}
      <Link to={`/`} className="flex justify-center items-center space-x-3 text-sm">
        <div className="w-8 h-8 rounded-full">
          <img src={logo || "/placeholder.svg"} alt="SRC Logo" className="w-full h-full rounded-full" />
        </div>
        <div className="whitespace-nowrap flex items-center">
          <p className="text-black text-lg sm:text-base font-semibold">SRC</p>
          <span className="font-semibold text-zinc-500 pl-2 hidden sm:inline">- Spiritual Research Cell</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="flex-1 hidden sm:flex justify-center items-center text-sm space-x-4">
        {menuItems.slice(0, 5).map((item) => (
          <Link key={item.name} to={item.path} className="font-medium">
            <div className={`pb-[0.2rem] ${isActive(item.path) ? "border-b-2 border-blue-600" : ""} font-semibold px-2`}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Upcoming Events Button */}
      
      <a href='https://varun-src-home.vercel.app/upcoming-events'>
        <Button size="sm" className="rounded-full px-6 hidden sm:inline-flex">Upcoming Events</Button>
      </a>
      

      {/* Hamburger */}
      <div className="sm:hidden">
        <Button variant="outline" size="icon" onClick={handleDrawerToggle}>
          <MenuIcon className="h-4 w-4" />  
        </Button>
      </div>

      {/* Drawer */}
      <Drawer anchor="right" open={showDrawer} onClose={handleDrawerToggle}>
        <div className="w-72 p-6 h-full">
          <div className="flex flex-col space-y-3 h-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full">
                  <img src={logo || "/placeholder.svg"} alt="SRC Logo" className="w-full h-full rounded-full" />
                </div>
                <p className="text-xl font-semibold">SRC</p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleDrawerToggle}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Separator />

            <div className="w-full mt-2 flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link key={item.name} to={item.path} onClick={handleDrawerToggle}>
                  <div
                    className={`w-full rounded p-2 flex space-x-3 items-center cursor-pointer ${
                      isActive(item.path) ? "bg-zinc-100 text-zinc-700 font-bold" : "font-semibold"
                    } text-lg`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex-1 w-full flex items-end">
              <div className="w-full border-t-2 border-zinc-100 pt-5 rounded p-2 flex space-x-3 items-center cursor-pointer text-zinc-500 font-semibold">
                <p className="text-center text-zinc-400 w-full">©2025 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar