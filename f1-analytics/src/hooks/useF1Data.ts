'use client'

import { useOpenF1 } from './useOpenF1'
import { fetchFromApi, apiEndpoints, ApiQueryParams } from '@/config/api'

interface UseF1DataOptions {
  enabled?: boolean
  refetchInterval?: number
}

/**
 * Hook to fetch drivers data
 */
export function useDrivers(params?: ApiQueryParams, options?: UseF1DataOptions) {
  return useOpenF1(
    () => fetchFromApi(apiEndpoints.drivers, params),
    [JSON.stringify(params)],
    options
  )
}

/**
 * Hook to fetch teams/constructors data
 */
export function useTeams(params?: ApiQueryParams, options?: UseF1DataOptions) {
  return useOpenF1(
    () => fetchFromApi(apiEndpoints.teams, params),
    [JSON.stringify(params)],
    options
  )
}

/**
 * Hook to fetch sessions data
 */
export function useSessions(params?: ApiQueryParams, options?: UseF1DataOptions) {
  return useOpenF1(
    () => fetchFromApi(apiEndpoints.sessions, params),
    [JSON.stringify(params)],
    options
  )
}

/**
 * Hook to fetch laps data
 */
export function useLaps(params?: ApiQueryParams, options?: UseF1DataOptions) {
  return useOpenF1(
    () => fetchFromApi(apiEndpoints.laps, params),
    [JSON.stringify(params)],
    options
  )
}

/**
 * Hook to fetch telemetry data
 */
export function useTelemetry(params?: ApiQueryParams, options?: UseF1DataOptions) {
  return useOpenF1(
    () => fetchFromApi(apiEndpoints.telemetry, params),
    [JSON.stringify(params)],
    options
  )
}

/**
 * Hook to fetch weather data
 */
export function useWeather(params?: ApiQueryParams, options?: UseF1DataOptions) {
  return useOpenF1(
    () => fetchFromApi(apiEndpoints.weather, params),
    [JSON.stringify(params)],
    options
  )
}
