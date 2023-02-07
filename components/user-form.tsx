import React, { useState } from 'react'

interface Props {
  loginUser: () => void
}
export default function UserForm({ loginUser }: Props) {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validUsername = input.username === process.env.NEXT_PUBLIC_USERNAME
    const validPassword = input.username === process.env.NEXT_PUBLIC_PASSWORD
    const valid = validUsername && validPassword

    if (valid) loginUser()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col justify-center gap-2 rounded-md border py-4 px-6 md:py-6 md:px-8"
    >
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={input.username}
          className="rounded-md border px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={input.password}
          className="rounded-md border px-2 py-1"
        />
      </div>
      <button className="mx-auto w-fit rounded-md bg-black px-4 py-2 text-white">
        Submit
      </button>
    </form>
  )
}
