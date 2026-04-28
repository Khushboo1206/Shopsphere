"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function RevenueChart({ revenueData }) {

  return (
    <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-4 md:p-6 mt-10">

      <div>

        <h3 className="text-3xl font-bold">
          Revenue Overview
        </h3>

        <p className="text-zinc-400 text-sm mt-2">
          Daily sales performance analytics
        </p>

      </div>

      <div className="h-[300px] md:h-[400px] mt-8">

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
  )
}