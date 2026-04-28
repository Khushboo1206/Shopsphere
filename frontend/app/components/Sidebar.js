import {
  LayoutDashboard,
  Package,
  BarChart3,
  Warehouse
} from "lucide-react"

export default function Sidebar() {

  return (
    <aside className="w-full lg:w-72 lg:min-h-screen border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-6">

      <div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          ShopSphere
        </h1>

        <p className="text-zinc-500 text-sm mt-2">
          Retail Analytics Platform
        </p>

      </div>

      <div className="mt-12 space-y-3">

        <div className="flex items-center gap-3 bg-white text-black rounded-xl px-4 py-3 font-medium cursor-pointer">

          <LayoutDashboard size={20} />

          <p>Dashboard</p>

        </div>

        <div className="flex items-center gap-3 hover:bg-zinc-900 rounded-xl px-4 py-3 transition cursor-pointer text-zinc-400 hover:text-white">

          <Package size={20} />

          <p>Products</p>

        </div>

        <div className="flex items-center gap-3 hover:bg-zinc-900 rounded-xl px-4 py-3 transition cursor-pointer text-zinc-400 hover:text-white">

          <BarChart3 size={20} />

          <p>Analytics</p>

        </div>

        <div className="flex items-center gap-3 hover:bg-zinc-900 rounded-xl px-4 py-3 transition cursor-pointer text-zinc-400 hover:text-white">

          <Warehouse size={20} />

          <p>Inventory</p>

        </div>

      </div>

    </aside>
  )
}