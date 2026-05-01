"use client"

import { useEffect, useState } from "react"

import Layout from "@/components/Layout"
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
    <Layout>

      <StatsCards stats={stats} />

      <RevenueChart revenueData={revenueData} />

      <TopProductsTable topProducts={topProducts} />

    </Layout>
  )
}