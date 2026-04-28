export default function TopProductsTable({ topProducts }) {

  return (
    <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 mt-10">

      <div>

        <h3 className="text-3xl font-bold">
          Top Products
        </h3>

        <p className="text-zinc-400 text-sm mt-2">
          Best performing products
        </p>

      </div>

      <div className="overflow-x-auto mt-8">

        <table className="w-full">

          <thead>

            <tr className="border-b border-zinc-800 text-zinc-500 text-left">

              <th className="pb-4 font-medium">
                Product
              </th>

              <th className="pb-4 font-medium">
                Units Sold
              </th>

              <th className="pb-4 font-medium">
                Revenue
              </th>

            </tr>

          </thead>

          <tbody>

            {topProducts.map((product, index) => (

              <tr
                key={index}
                className="border-b border-zinc-800 hover:bg-zinc-900/50 transition"
              >

                <td className="py-5 font-medium">
                  {product.product_name}
                </td>

                <td className="py-5 text-zinc-400">
                  {product.total_units_sold}
                </td>

                <td className="py-5">
                  ₹{product.total_revenue}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}