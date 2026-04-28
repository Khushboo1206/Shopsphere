"use client"

import { useEffect, useState } from "react"

import Sidebar from "@/components/Sidebar"

export default function ProductsPage() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))

  }, [])

  const filteredProducts = products.filter((product) =>
    product.product_name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="flex flex-col lg:flex-row relative z-10">

        <Sidebar />

        <section className="flex-1 p-4 md:p-6 lg:p-10">

          <h1 className="text-4xl md:text-5xl font-bold">
            Products
          </h1>

          <p className="text-zinc-400 mt-3">
            Manage and monitor inventory
          </p>

          {/* Search */}
          <div className="mt-8">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[400px] bg-zinc-900/70 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-zinc-600"
            />

          </div>

          {/* Products Table */}
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 mt-10 overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-zinc-800 text-zinc-500 text-left">

                  <th className="pb-4">Product</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Stock</th>
                  <th className="pb-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredProducts.map((product) => (

                  <tr
                    key={product.product_id}
                    className="border-b border-zinc-800 hover:bg-zinc-900/50 transition"
                  >

                    <td className="py-5 font-medium">
                      {product.product_name}
                    </td>

                    <td className="py-5">
                      ₹{product.price}
                    </td>

                    <td className="py-5">
                      {product.stock_quantity}
                    </td>

                    <td className="py-5">

                      {product.stock_quantity > 20 ? (

                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          In Stock
                        </span>

                      ) : (

                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                          Low Stock
                        </span>

                      )}

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