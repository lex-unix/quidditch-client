import { API_URL } from '@/lib/constants'
import useSWR from 'swr'
import type { Player } from '@/lib/types'
import fetcher from '@/lib/fetcher'

export default function usePlayers() {
  const { data, isLoading, error } = useSWR<Player[]>(
    `${API_URL}/players/get-all`,
    fetcher
  )

  return {
    players: data,
    isLoading,
    isError: error
  }
}
