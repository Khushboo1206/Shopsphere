"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/Sidebar"

export default function InventoryPage() {

  const [alerts, setAlerts] = useState([])

  useEffect(() => {

    fetch("http://127.0.0.1:8000/inventory-alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))

  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="flex flex-col lg:flex-row relative z-10">

        <Sidebar />

        <section className="flex-1 p-4 md:p-6 lg:p-10">

          <h1 className="text-4xl md:text-5xl font-bold">
            Inventory
          </h1>

          <p className="text-zinc-400 mt-3">
            Real-time inventory monitoring and alerts
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-400 text-sm">
                Low Stock Products
              </p>

              <h2 className="text-4xl font-bold mt-3 text-red-400">
                {alerts.length}
              </h2>

            </div>

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-400 text-sm">
                Inventory Status
              </p>

              <h2 className="text-3xl font-bold mt-3 text-green-400">
                Active
              </h2>

            </div>

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-400 text-sm">
                Monitoring
              </p>

              <h2 className="text-3xl font-bold mt-3">
                24/7
              </h2>

            </div>

          </div>

          {/* Alerts Table */}
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 mt-10 overflow-x-auto">

            <div>

              <h2 className="text-3xl font-bold">
                Inventory Alerts
              </h2>

              <p className="text-zinc-400 text-sm mt-2">
                Products requiring immediate restock
              </p>

            </div>

            <table className="w-full mt-8">

              <thead>

                <tr className="border-b border-zinc-800 text-zinc-500 text-left">

                  <th className="pb-4">Product</th>
                  <th className="pb-4">Stock Quantity</th>
                  <th className="pb-4">Reorder Level</th>
                  <th className="pb-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {alerts.map((alert, index) => (

                  <tr
                    key={index}
                    className="border-b border-zinc-800 hover:bg-zinc-900/50 transition"
                  >

                    <td className="py-5 font-medium">
                      {alert.product_name}
                    </td>

                    <td className="py-5 text-red-400">
                      {alert.stock_quantity}
                    </td>

                    <td className="py-5">
                      {alert.reorder_level}
                    </td>

                    <td className="py-5">

                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        Restock Needed
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </div>

    </main>
  )
}