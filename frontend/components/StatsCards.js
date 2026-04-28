"use client"

import { motion } from "framer-motion"

export default function StatsCards({ stats }) {

  if (!stats) {

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

        {[1, 2, 3, 4].map((item) => (

          <div
            key={item}
            className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 animate-pulse"
          >

            <div className="h-4 bg-zinc-800 rounded w-24"></div>

            <div className="h-10 bg-zinc-800 rounded w-20 mt-4"></div>

          </div>

        ))}

      </div>
    )
  }

  const cards = [
    {
      title: "Total Revenue",
      value: `₹${stats.total_revenue}`
    },
    {
      title: "Products",
      value: stats.total_products
    },
    {
      title: "Customers",
      value: stats.total_customers
    },
    {
      title: "Inventory Alerts",
      value: stats.inventory_alerts
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

      {cards.map((card, index) => (

        <motion.div
          key={index}

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: index * 0.1
          }}

          whileHover={{
            scale: 1.03
          }}

          className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition"
        >

          <p className="text-zinc-400 text-sm">
            {card.title}
          </p>

          <h3 className="text-4xl font-bold mt-3">
            {card.value}
          </h3>

        </motion.div>

      ))}

    </div>
  )
}