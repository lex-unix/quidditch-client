import useSWR from 'swr'
import { API_URL } from '@/lib/constants'
import { Post } from '@/lib/types'
import fetcher from '@/lib/fetcher'

export default function UsePosts() {
  const { data, isLoading, error } = useSWR<Post[]>(
    API_URL + '/players/get-all',
    fetcher
  )

  return {
    posts: data,
    isLoading,
    isError: error
  }
}
