"use client"

import { saveAs } from "file-saver"

export default function ExportButton({ data }) {

  function exportCSV() {

    if (!data || data.length === 0) return

    const headers = Object.keys(data[0]).join(",")

    const rows = data.map((row) =>
      Object.values(row).join(",")
    )

    const csvContent = [
      headers,
      ...rows
    ].join("\n")

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;"
      }
    )

    saveAs(blob, "products-report.csv")
  }

  return (
    <button
      onClick={exportCSV}
      className="bg-white text-black px-5 py-3 rounded-2xl font-medium hover:scale-105 transition"
    >

      Export CSV

    </button>
  )
}