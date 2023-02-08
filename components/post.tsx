import { type Post as PostProps } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'

interface Props extends PostProps {}

export default function Post(props: Props) {
  const { name, content, posted } = props

  const created = posted && posted.split('.')[0]
  return (
    <div className="rounded-md border bg-white px-4 py-2 shadow-md md:py-6 md:px-8">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">{name}</h2>
        <p className="mt-2">{content}</p>
      </div>
      <div>
        <p className="text-right opacity-60">
          {formatDistanceToNow(new Date(created))} ago
        </p>
      </div>
    </div>
  )
}
