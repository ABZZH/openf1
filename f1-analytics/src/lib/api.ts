/**
 * API client library for OpenF1 data
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export interface ApiQueryParams {
  [key: string]: string | number | boolean | undefined
}

/**
 * Generic fetch function for OpenF1 API
 */
async function fetchApi<T>(endpoint: string, params?: ApiQueryParams): Promise<T> {
  const url = new URL(`${API_BASE_URL}/${endpoint}`)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value))
      }
    })
  }

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get drivers for a specific session
 */
export async function getDrivers(params?: ApiQueryParams) {
  return fetchApi('v1/drivers', params)
}

/**
 * Get teams/constructors data
 */
export async function getTeams(params?: ApiQueryParams) {
  return fetchApi('v1/teams', params)
}

/**
 * Get meetings
 */
export async function getMeetings(params?: ApiQueryParams) {
  return fetchApi('v1/meetings', params)
}

/**
 * Get sessions
 */
export async function getSessions(params?: ApiQueryParams) {
  return fetchApi('v1/sessions', params)
}

/**
 * Get latest session
 */
export async function getLatestSession() {
  const sessions = await getSessions({ limit: 1 })
  return sessions[0] || null
}

/**
 * Get laps data
 */
export async function getLaps(params?: ApiQueryParams) {
  return fetchApi('v1/laps', params)
}

/**
 * Get telemetry data
 */
export async function getTelemetry(params?: ApiQueryParams) {
  return fetchApi('v1/telemetry', params)
}

/**
 * Get car data
 */
export async function getCarData(params?: ApiQueryParams) {
  return fetchApi('v1/car_data', params)
}

/**
 * Get weather data
 */
export async function getWeather(params?: ApiQueryParams) {
  return fetchApi('v1/weather', params)
}

/**
 * Get radio communications
 */
export async function getRadio(params?: ApiQueryParams) {
  return fetchApi('v1/radio', params)
}

/**
 * Get championship driver standings
 */
export async function getChampionshipDrivers(params?: ApiQueryParams) {
  return fetchApi('v1/championship_drivers', params)
}

/**
 * Get championship team standings
 */
export async function getChampionshipTeams(params?: ApiQueryParams) {
  return fetchApi('v1/championship_teams', params)
}

/**
 * Get session results
 */
export async function getSessionResults(params?: ApiQueryParams) {
  return fetchApi('v1/session_results', params)
}

/**
 * Get starting grid
 */
export async function getStartingGrid(params?: ApiQueryParams) {
  return fetchApi('v1/starting_grid', params)
}

/**
 * Get race control messages
 */
export async function getRaceControl(params?: ApiQueryParams) {
  return fetchApi('v1/race_control', params)
}
