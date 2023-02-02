import { API_URL } from '@/lib/constants'
import useSWR from 'swr'
import type { Player } from '@/lib/types'

export default function usePlayer(id: string) {
  const { data, isLoading, error } = useSWR<Player>(
    `${API_URL}/players/get/${id}`
  )

  return {
    player: data,
    isLoading,
    isError: error
  }
}
