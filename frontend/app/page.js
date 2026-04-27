"use client"

import { useEffect, useState } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function Home() {

  const [stats, setStats] = useState(null)
  const [revenueData, setRevenueData] = useState([])

  useEffect(() => {

    fetch("http://127.0.0.1:8000/dashboard-stats")
      .then((res) => res.json())
      .then((data) => setStats(data))

    fetch("http://127.0.0.1:8000/revenue-summary")
      .then((res) => res.json())
      .then((data) => setRevenueData(data))

  }, [])

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="flex flex-col lg:flex-row">

        {/* Sidebar */}
        <aside className="w-full lg:w-64 lg:min-h-screen border-b lg:border-b-0 lg:border-r border-zinc-800 p-6">

          <h1 className="text-3xl font-bold">
            ShopSphere
          </h1>

          <div className="mt-10 flex lg:flex-col gap-6 lg:gap-4 text-zinc-400 overflow-x-auto">

            <p className="hover:text-white cursor-pointer transition">
              Dashboard
            </p>

            <p className="hover:text-white cursor-pointer transition">
              Products
            </p>

            <p className="hover:text-white cursor-pointer transition">
              Analytics
            </p>

            <p className="hover:text-white cursor-pointer transition">
              Inventory
            </p>

          </div>

        </aside>

        {/* Main Content */}
        <section className="flex-1 p-4 md:p-6 lg:p-10">

          <h2 className="text-2xl md:text-4xl font-bold">
            Analytics Dashboard
          </h2>

          <p className="text-zinc-400 mt-2 text-sm md:text-base">
            PostgreSQL Powered Retail Intelligence
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {/* Revenue */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">

              <p className="text-zinc-400 text-sm">
                Total Revenue
              </p>

              <h3 className="text-3xl font-bold mt-2 break-words">
                ₹{stats?.total_revenue || 0}
              </h3>

            </div>

            {/* Products */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">

              <p className="text-zinc-400 text-sm">
                Products
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {stats?.total_products || 0}
              </h3>

            </div>

            {/* Customers */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">

              <p className="text-zinc-400 text-sm">
                Customers
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {stats?.total_customers || 0}
              </h3>

            </div>

            {/* Alerts */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500 transition">

              <p className="text-zinc-400 text-sm">
                Inventory Alerts
              </p>

              <h3 className="text-3xl font-bold mt-2 text-red-400">
                {stats?.inventory_alerts || 0}
              </h3>

            </div>

          </div>

          {/* Revenue Chart */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-6 mt-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <h3 className="text-2xl font-bold">
                  Revenue Overview
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                  Daily sales performance analytics
                </p>

              </div>

            </div>

            <div className="h-[300px] md:h-[400px] mt-6">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={revenueData}>

                  <XAxis
                    dataKey="order_date"
                    stroke="#888888"
                  />

                  <YAxis
                    stroke="#888888"
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="daily_revenue"
                    stroke="#ffffff"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

        </section>

      </div>

    </main>
  )
}