/**
 * API Configuration for OpenF1 Backend
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export interface ApiQueryParams {
  [key: string]: string | number | boolean | undefined
}

/**
 * Fetch data from the OpenF1 API
 */
export async function fetchFromApi<T>(
  endpoint: string,
  params?: ApiQueryParams,
  options?: RequestInit
): Promise<T> {
  const url = new URL(`${API_BASE_URL}/${endpoint}`)

  // Add query parameters
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

/**
 * API endpoints
 */
export const apiEndpoints = {
  drivers: 'v1/drivers',
  teams: 'v1/teams',
  sessions: 'v1/sessions',
  laps: 'v1/laps',
  telemetry: 'v1/telemetry',
  carData: 'v1/car_data',
  weather: 'v1/weather',
}
