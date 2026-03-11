/**
 * Utility functions for the frontend
 */

import { TEAM_COLORS } from '@/types'

/**
 * Combine classNames conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Get color for a team
 */
export function getTeamColor(teamName: string): string {
  return TEAM_COLORS[teamName] || '#666666'
}

/**
 * Format duration in seconds to readable format
 */
export function formatDuration(seconds: number | null): string {
  if (!seconds) return 'N/A'

  const minutes = Math.floor(seconds / 60)
  const secs = (seconds % 60).toFixed(3)

  return `${minutes}:${secs}`
}

/**
 * Format speed values
 */
export function formatSpeed(speed: number | null): string {
  if (!speed) return 'N/A'
  return `${speed.toFixed(1)} km/h`
}

/**
 * Format date to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Format datetime to readable format
 */
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * Get time gap formatted with leading space
 */
export function formatGap(gap: number | string | null): string {
  if (gap === null || gap === undefined) return '-'
  if (typeof gap === 'string') return gap
  return gap > 0 ? `+${gap.toFixed(3)}` : gap.toFixed(3)
}

/**
 * Format a date range (e.g., "Mar 1 - Mar 3, 2024")
 */
export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const sameDay = start.toDateString() === end.toDateString()
  if (sameDay) {
    return formatDate(startDate)
  }

  const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()
  const sameYear = start.getFullYear() === end.getFullYear()

  if (sameMonth) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
  }

  if (sameYear) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}
