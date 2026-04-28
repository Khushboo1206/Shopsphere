export default function StatsCards({ stats }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition">

        <p className="text-zinc-400 text-sm">
          Total Revenue
        </p>

        <h3 className="text-4xl font-bold mt-3">
          ₹{stats?.total_revenue || 0}
        </h3>

      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition">

        <p className="text-zinc-400 text-sm">
          Products
        </p>

        <h3 className="text-4xl font-bold mt-3">
          {stats?.total_products || 0}
        </h3>

      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition">

        <p className="text-zinc-400 text-sm">
          Customers
        </p>

        <h3 className="text-4xl font-bold mt-3">
          {stats?.total_customers || 0}
        </h3>

      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-red-500 transition">

        <p className="text-zinc-400 text-sm">
          Inventory Alerts
        </p>

        <h3 className="text-4xl font-bold mt-3 text-red-400">
          {stats?.inventory_alerts || 0}
        </h3>

      </div>

    </div>
  )
}