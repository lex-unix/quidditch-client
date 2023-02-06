import { API_URL } from '@/lib/constants'
import { type Comment as CommentProps } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'
import { TrashIcon } from './icons'
import { useSWRConfig } from 'swr'
import { deletComment } from '@/lib/comment'

interface Props extends CommentProps {
  postId: string
}

export default function Comment(props: Props) {
  const { postId, id, author, content, posted } = props
  const { mutate } = useSWRConfig()

  const handleDeleteComment = async () => {
    const res = await deletComment(id)

    if (res.ok) {
      mutate(`${API_URL}/posts/get/${postId}`)
      console.log('Deleted comment:', id)
    }
  }

  return (
    <div className="rounded-md bg-gray-50 py-2 px-4">
      <div className="">
        <p className="font-semibold opacity-60">{author}</p>
        <p>{content}</p>
      </div>
      <div className="flex items-center justify-end">
        <p className="mr-2 text-right">
          {formatDistanceToNow(new Date(posted))} ago
        </p>
        <button
          onClick={handleDeleteComment}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100 text-red-700 hover:bg-red-200"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
