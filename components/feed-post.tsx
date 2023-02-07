import React from 'react'
import { type Post as PostProps } from '@/lib/types'
import { TrashIcon } from './icons'
import { API_URL } from '@/lib/constants'
import { useSWRConfig } from 'swr'
import Link from 'next/link'

interface Props extends PostProps {}

export default function FeedPost(props: Props) {
  const { id, name, content } = props
  const { mutate } = useSWRConfig()

  const handlePostDelete = async () => {
    const res = await fetch(`${API_URL}/posts/delete/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) {
    } else {
      mutate(`${API_URL}/posts/get-all?page=${1}&length=${100}`)
    }
  }

  return (
    <li className="rounded-md border border-zinc-300/70 bg-white py-2 px-4">
      <div className="mb-4">
        <p className="text-lg font-bold">
          <Link href={`/news/${id}`}>{name}</Link>
        </p>
        <p className="line-clamp-2 md:line-clamp-3">{content}</p>
      </div>
      <div className="-mx-4 border-t border-t-zinc-300/70">
        <div className="flex h-full justify-end px-4 pt-2">
          <button
            onClick={handlePostDelete}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100/70 text-red-500"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </li>
  )
}
