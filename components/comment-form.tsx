import { API_URL } from '@/lib/constants'
import React, { useState } from 'react'
import { useSWRConfig } from 'swr'

interface Props {
  postId: string
}

export default function CommentForm({ postId }: Props) {
  const [input, setInput] = useState({
    author: '',
    content: ''
  })
  const { mutate } = useSWRConfig()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`${API_URL}/comments/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...input,
        post: {
          id: postId
        }
      })
    })

    if (res.ok) {
      mutate(`${API_URL}/posts/get/${postId}`)
      setInput({
        author: '',
        content: ''
      })
      console.log('new comment posted')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col justify-center gap-4 rounded-xl border py-4 px-6"
    >
      <div className="flex flex-col gap-1">
        <label className="opacity-60">First name</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={handleChange}
          value={input.author}
          className="rounded-md border px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Comment</label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          value={input.content}
          className="rounded-md border px-2 py-1"
        ></textarea>
      </div>
      <button className="mx-auto w-fit rounded-md bg-black px-4 py-2 text-white">
        Submit
      </button>
    </form>
  )
}
