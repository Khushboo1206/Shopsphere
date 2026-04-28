"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  Package,
  BarChart3,
  Warehouse
} from "lucide-react"

export default function Sidebar() {

  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: LayoutDashboard
    },
    {
      name: "Products",
      href: "/products",
      icon: Package
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: BarChart3
    },
    {
      name: "Inventory",
      href: "/inventory",
      icon: Warehouse
    }
  ]

  return (
    <aside className="w-full lg:w-72 lg:min-h-screen border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-6">

      <div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          ShopSphere
        </h1>

        <p className="text-zinc-500 text-sm mt-2">
          Retail Analytics Platform
        </p>

      </div>

      <div className="mt-12 flex lg:flex-col gap-4 overflow-x-auto">

        {navItems.map((item) => {

          const Icon = item.icon

          const isActive = pathname === item.href

          return (

            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition whitespace-nowrap
              
              ${isActive
                ? "bg-white text-black font-medium"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"}
              `}
            >

              <Icon size={20} />

              <p>{item.name}</p>

            </Link>

          )

        })}

      </div>

    </aside>
  )
}