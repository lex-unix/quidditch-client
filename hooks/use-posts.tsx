import useSWR from 'swr'
import { API_URL } from '@/lib/constants'
import { Post } from '@/lib/types'
import fetcher from '@/lib/fetcher'

type Data = {
  posts: Post[]
  totalCount: number
}

export default function UsePosts(page: number = 1, length: number = 100) {
  const { data, isLoading, error } = useSWR<Data>(
    `${API_URL}/posts/get-all?page=${page}&length=${length}`,
    fetcher
  )

  return {
    ...data,
    isLoading,
    isError: error
  }
}
