import { API_URL } from '@/lib/constants'
import fetcher from '@/lib/fetcher'
import { Team } from '@/lib/types'
import useSWR from 'swr'

export default function useTeams() {
  const { data, isLoading, error } = useSWR<Team[]>(
    `${API_URL}/teams/get-all`,
    fetcher
  )

  return {
    teams: data,
    isLoading,
    isError: error
  }
}
