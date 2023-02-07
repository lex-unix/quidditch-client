import React, { useState } from 'react'

interface Props {
  loginUser: () => void
}
export default function UserForm({ loginUser }: Props) {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
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

    !validUsername &&
      setErrors(prev => ({
        ...prev,
        username: "Usernames don't match"
      }))
    !validPassword &&
      setErrors(prev => ({
        ...prev,
        password: "Passwords don't match"
      }))

    if (valid) loginUser()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col justify-center gap-2 rounded-md border bg-white py-4 px-6 md:py-6 md:px-8"
    >
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={input.username}
          required
          className="rounded-md border px-2 py-1"
        />
        {errors.username && (
          <p className="text-sm text-red-400">{errors.username}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="opacity-60">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={input.password}
          required
          className="rounded-md border px-2 py-1"
        />
        {errors.password && (
          <p className="text-sm text-red-400">{errors.password}</p>
        )}
      </div>
      <button className="mx-auto w-fit rounded-md bg-black px-4 py-2 text-white">
        Submit
      </button>
    </form>
  )
}
