import useSWR from 'swr'
import { API_URL } from '@/lib/constants'
import { type Post } from '@/lib/types'
import fetcher from '@/lib/fetcher'

export default function usePost(id: string) {
  const { data, isLoading, error } = useSWR<Post>(
    `${API_URL}/posts/get/${id}`,
    fetcher
  )

  return {
    post: data,
    isLoading,
    isError: error
  }
}
