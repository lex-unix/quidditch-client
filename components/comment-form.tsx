import { createComment } from '@/lib/comment'
import { API_URL } from '@/lib/constants'
import React, { useRef, useState } from 'react'
import useResizableTextarea from '@/hooks/use-resizable-textarea'
import { useSWRConfig } from 'swr'

interface Props {
  postId: string
}

export default function CommentForm({ postId }: Props) {
  const [input, setInput] = useState({
    author: '',
    content: ''
  })
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { mutate } = useSWRConfig()

  useResizableTextarea(textareaRef.current, input.content)

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

    const res = await createComment(postId, input)

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
      className="flex flex-col justify-center gap-4 rounded-md border bg-white py-4 px-6 shadow-md"
    >
      <div className="flex max-w-sm flex-col gap-1">
        <label className="opacity-60">Your name</label>
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
          ref={textareaRef}
          id="content"
          name="content"
          onChange={handleChange}
          value={input.content}
          className="min-h-[40px] rounded-md border px-2 py-1"
        ></textarea>
      </div>
      <button className="mx-auto w-fit rounded-md border bg-black px-4 py-2 text-sm text-white">
        Submit
      </button>
    </form>
  )
}
