import useResizableTextarea from '@/hooks/use-resizable-textarea'
import { API_URL } from '@/lib/constants'
import { createPost } from '@/lib/post'
import React, { useRef, useState } from 'react'
import { useSWRConfig } from 'swr'

export default function PostForm() {
  const [input, setInput] = useState({
    name: '',
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

    const res = await createPost(input)

    if (res.ok) {
      mutate(`${API_URL}/posts/get-all?page=${1}&length=${100}`)
      setInput({
        name: '',
        content: ''
      })
      console.log('Post Created')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-5xl flex-col justify-center gap-4 rounded-xl border bg-white py-4 px-6"
    >
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Title</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={input.name}
          className="max-w-xl rounded-md border px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Content</label>
        <textarea
          ref={textareaRef}
          id="content"
          name="content"
          onChange={handleChange}
          value={input.content}
          className="min-h-[40px] rounded-md border px-2 py-1"
        ></textarea>
      </div>
      <button className="w-fit rounded-md bg-black px-4 py-2 text-left text-white">
        Submit
      </button>
    </form>
  )
}
