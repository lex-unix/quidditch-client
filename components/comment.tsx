import { type Comment as CommentProps } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'
import { TrashIcon } from './icons'
import { deleteComment } from '@/lib/comment'
import { useAtomValue } from 'jotai'
import { admin } from '@/store/admin'
import { useRouter } from 'next/router'

interface Props extends CommentProps {
  postId: string
}

export default function Comment(props: Props) {
  const { id, author, content, posted } = props
  const isAdmin = useAtomValue(admin)
  const router = useRouter()

  const handleDeleteComment = async () => {
    const res = await deleteComment(id)

    if (res.ok) {
      router.replace(router.asPath)
      console.log('Deleted comment:', id)
    }
  }

  return (
    <div className="rounded-md border bg-white py-2 px-4 shadow-md">
      <div className="">
        <p className="font-semibold opacity-50">{author}</p>
        <p>{content}</p>
      </div>
      <div className="flex items-center justify-end">
        <p className="mr-2 text-right opacity-50">
          {formatDistanceToNow(new Date(posted))} ago
        </p>
        {isAdmin && (
          <button
            onClick={handleDeleteComment}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100 text-red-700 hover:bg-red-200"
          >
            <TrashIcon />
          </button>
        )}
      </div>
    </div>
  )
}
