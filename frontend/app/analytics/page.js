"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/Sidebar"

export default function AnalyticsPage() {

  const [customers, setCustomers] = useState([])

  useEffect(() => {

    fetch("http://127.0.0.1:8000/customer-rankings")
      .then((res) => res.json())
      .then((data) => setCustomers(data))

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
            Analytics
          </h1>

          <p className="text-zinc-400 mt-3">
            Advanced PostgreSQL customer insights
          </p>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-400 text-sm">
                Ranked Customers
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {customers.length}
              </h2>

            </div>

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-400 text-sm">
                Top Customer
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {customers[0]?.customer_name || "-"}
              </h2>

            </div>

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6">

              <p className="text-zinc-400 text-sm">
                Highest Spending
              </p>

              <h2 className="text-3xl font-bold mt-3">
                ₹{customers[0]?.total_spent || 0}
              </h2>

            </div>

          </div>

          {/* Rankings Table */}
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 mt-10 overflow-x-auto">

            <div>

              <h2 className="text-3xl font-bold">
                Customer Rankings
              </h2>

              <p className="text-zinc-400 text-sm mt-2">
                Powered by PostgreSQL Window Functions
              </p>

            </div>

            <table className="w-full mt-8">

              <thead>

                <tr className="border-b border-zinc-800 text-zinc-500 text-left">

                  <th className="pb-4">Rank</th>
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Total Spent</th>

                </tr>

              </thead>

              <tbody>

                {customers.map((customer, index) => (

                  <tr
                    key={index}
                    className="border-b border-zinc-800 hover:bg-zinc-900/50 transition"
                  >

                    <td className="py-5 font-bold">
                      #{customer.customer_rank}
                    </td>

                    <td className="py-5">
                      {customer.customer_name}
                    </td>

                    <td className="py-5">
                      ₹{customer.total_spent}
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