import useSWR from 'swr'
import { API_URL } from '@/lib/constants'
import { Post } from '@/lib/types'
import fetcher from '@/lib/fetcher'

export default function UsePosts(page: number = 1, length: number = 100) {
  const { data, isLoading, error } = useSWR<Post[]>(
    `${API_URL}/posts/get-all?page=${page}&length=${length}`,
    fetcher
  )

  console.log(data)

  return {
    posts: data,
    isLoading,
    isError: error
  }
}
