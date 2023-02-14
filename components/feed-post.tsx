import React from 'react'
import { type Post as PostProps } from '@/lib/types'
import { TrashIcon } from './icons'
import { API_URL } from '@/lib/constants'
import { useSWRConfig } from 'swr'
import Link from 'next/link'
import { useAtomValue } from 'jotai'
import { admin } from '@/store/admin'
import { deletePost } from '@/lib/post'
import { format, isToday } from 'date-fns'
import { pageAtom } from '@/store/page'

interface Props extends PostProps {}

export default function FeedPost(props: Props) {
  const isAdmin = useAtomValue(admin)
  const currentPage = useAtomValue(pageAtom)
  const { id, name, content, posted } = props
  const { mutate } = useSWRConfig()
  const date = new Date(posted)
  const formatedDate = isToday(date)
    ? format(date, 'HH:mm')
    : format(date, 'dd/MM')

  const handlePostDelete = async () => {
    const res = await deletePost(id)
    if (res.ok) {
      mutate(`${API_URL}/posts/get-all?page=${currentPage}&length=${33}`)
    }
  }

  return (
    <li className="relative mb-4 flex flex-col border-b bg-white pb-2 last:border-b-0 md:flex-row md:items-start">
      <div className="mt-1 mr-4 inline-flex flex-col items-center justify-center text-sm opacity-60">
        <p className="">{formatedDate}</p>
        {!isToday(date) && <p>{date.getFullYear()}</p>}
      </div>
      <div className="mt-2 flex-1 md:mt-0">
        <Link
          className="text-lg font-medium underline-offset-2 hover:text-rose-800 hover:underline"
          href={`/news/${id}`}
        >
          {name}
        </Link>
        <span className="opacity-60 line-clamp-1">{content}</span>
      </div>
      {isAdmin && (
        <div className="absolute -top-1 -right-4 md:-top-4">
          <div className="flex h-full justify-end px-4 pt-2">
            <button
              onClick={handlePostDelete}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100/70 text-red-500 hover:bg-red-100"
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      )}
    </li>
  )
}
