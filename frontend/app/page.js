// "use client"

// import { useEffect, useState } from "react"

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts"

// export default function Home() {

//   const [stats, setStats] = useState(null)
//   const [revenueData, setRevenueData] = useState([])
//   const [topProducts, setTopProducts] = useState([])

//   useEffect(() => {

//     fetch("http://127.0.0.1:8000/dashboard-stats")
//       .then((res) => res.json())
//       .then((data) => setStats(data))

//     fetch("http://127.0.0.1:8000/revenue-summary")
//       .then((res) => res.json())
//       .then((data) => setRevenueData(data))

//       fetch("http://127.0.0.1:8000/top-products")
//   .then((res) => res.json())
//   .then((data) => setTopProducts(data))

//   }, [])

//   return (
//     <main className="min-h-screen bg-black text-white relative overflow-hidden">

//       {/* Background Glow Effects */}

//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

//       <div className="flex flex-col lg:flex-row relative z-10">

//         {/* Sidebar */}
//         <aside className="w-full lg:w-72 lg:min-h-screen border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-6">

//           <div>

//             <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
//               ShopSphere
//             </h1>

//             <p className="text-zinc-500 text-sm mt-2">
//               Retail Analytics Platform
//             </p>

//           </div>

//           <div className="mt-12 flex lg:flex-col gap-4 overflow-x-auto text-zinc-400">

//             <div className="bg-white text-black rounded-xl px-4 py-3 font-medium cursor-pointer whitespace-nowrap">
//               Dashboard
//             </div>

//             <div className="hover:bg-zinc-900 rounded-xl px-4 py-3 transition cursor-pointer hover:text-white whitespace-nowrap">
//               Products
//             </div>

//             <div className="hover:bg-zinc-900 rounded-xl px-4 py-3 transition cursor-pointer hover:text-white whitespace-nowrap">
//               Analytics
//             </div>

//             <div className="hover:bg-zinc-900 rounded-xl px-4 py-3 transition cursor-pointer hover:text-white whitespace-nowrap">
//               Inventory
//             </div>

//           </div>

//         </aside>

//         {/* Main Content */}
//         <section className="flex-1 p-4 md:p-6 lg:p-10 backdrop-blur-sm">

//           <h2 className="text-3xl md:text-5xl font-bold">
//             Analytics Dashboard
//           </h2>

//           <p className="text-zinc-400 mt-3 text-sm md:text-base">
//             PostgreSQL Powered Retail Intelligence
//           </p>

//           {/* KPI Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

//             {/* Revenue */}
//             <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition">

//               <p className="text-zinc-400 text-sm">
//                 Total Revenue
//               </p>

//               <h3 className="text-4xl font-bold mt-3 break-words">
//                 ₹{stats?.total_revenue || 0}
//               </h3>

//             </div>

//             {/* Products */}
//             <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition">

//               <p className="text-zinc-400 text-sm">
//                 Products
//               </p>

//               <h3 className="text-4xl font-bold mt-3">
//                 {stats?.total_products || 0}
//               </h3>

//             </div>

//             {/* Customers */}
//             <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition">

//               <p className="text-zinc-400 text-sm">
//                 Customers
//               </p>

//               <h3 className="text-4xl font-bold mt-3">
//                 {stats?.total_customers || 0}
//               </h3>

//             </div>

//             {/* Alerts */}
//             <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-red-500 transition">

//               <p className="text-zinc-400 text-sm">
//                 Inventory Alerts
//               </p>

//               <h3 className="text-4xl font-bold mt-3 text-red-400">
//                 {stats?.inventory_alerts || 0}
//               </h3>

//             </div>

//           </div>

//           {/* Revenue Chart */}
//           <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-4 md:p-6 mt-10">

//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

//               <div>

//                 <h3 className="text-3xl font-bold">
//                   Revenue Overview
//                 </h3>

//                 <p className="text-zinc-400 text-sm mt-2">
//                   Daily sales performance analytics
//                 </p>

//               </div>

//             </div>

//             <div className="h-[300px] md:h-[400px] mt-8">

//               <ResponsiveContainer width="100%" height="100%">

//                 <LineChart data={revenueData}>

//                   <XAxis
//                     dataKey="order_date"
//                     stroke="#888888"
//                   />

//                   <YAxis
//                     stroke="#888888"
//                   />

//                   <Tooltip />

//                   <Line
//                     type="monotone"
//                     dataKey="daily_revenue"
//                     stroke="#ffffff"
//                     strokeWidth={3}
//                   />

//                 </LineChart>

//               </ResponsiveContainer>

//             </div>

//           </div>

//         </section>

//       </div>

//     </main>
//   )
// }

"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/Sidebar"
import StatsCards from "@/components/StatsCards"
import RevenueChart from "@/components/RevenueChart"
import TopProductsTable from "@/components/TopProductsTable"

import {
  getDashboardStats,
  getRevenueSummary,
  getTopProducts
} from "@/services/api"

export default function Home() {

  const [stats, setStats] = useState(null)
  const [revenueData, setRevenueData] = useState([])
  const [topProducts, setTopProducts] = useState([])

  useEffect(() => {

    async function fetchData() {

      const statsData = await getDashboardStats()
      const revenueData = await getRevenueSummary()
      const topProductsData = await getTopProducts()

      setStats(statsData)
      setRevenueData(revenueData)
      setTopProducts(topProductsData)
    }

    fetchData()

  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="flex flex-col lg:flex-row relative z-10">

        <Sidebar />

        <section className="flex-1 p-4 md:p-6 lg:p-10 backdrop-blur-sm">

          <h2 className="text-3xl md:text-5xl font-bold">
            Analytics Dashboard
          </h2>

          <p className="text-zinc-400 mt-3 text-sm md:text-base">
            PostgreSQL Powered Retail Intelligence
          </p>

          <StatsCards stats={stats} />

          <RevenueChart revenueData={revenueData} />

          <TopProductsTable topProducts={topProducts} />

        </section>

      </div>

    </main>
  )
}