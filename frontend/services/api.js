const BASE_URL = "http://127.0.0.1:8000"

export async function getDashboardStats() {

  const response = await fetch(
    `${BASE_URL}/dashboard-stats`
  )

  return response.json()
}

export async function getRevenueSummary() {

  const response = await fetch(
    `${BASE_URL}/revenue-summary`
  )

  return response.json()
}

export async function getTopProducts() {

  const response = await fetch(
    `${BASE_URL}/top-products`
  )

  return response.json()
}