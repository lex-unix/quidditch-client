import { API_URL } from '@/lib/constants'
import { createPlayer, createAvatar } from '@/lib/player'
import React, { useState } from 'react'
import { useSWRConfig } from 'swr'

export default function PlayerForm() {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    age: '',
    playerType: 'CHASER'
  })
  const [file, setFile] = useState<File | null>(null)
  const { mutate } = useSWRConfig()

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = e => {
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0]
    if (!f) setFile(null)
    setFile(f)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!file) return

    const data = new FormData()

    data.append('file', file)

    const fileRes = await createAvatar(data)

    if (fileRes.ok) {
      const { id } = await fileRes.json()
      const playerRes = await createPlayer(id, input)

      if (playerRes.ok) {
        mutate(`${API_URL}/players/get-all`)

        setInput({
          firstname: '',
          lastname: '',
          age: '',
          playerType: 'CHASER'
        })

        console.log('Success')
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col justify-center gap-4 rounded-xl border py-4 px-6"
    >
      <div className="flex flex-col gap-1">
        <label className="text-zinc-900/60">First name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          required
          minLength={2}
          maxLength={30}
          className="rounded-md border px-2 py-1"
          onChange={handleChange}
          value={input.firstname}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-zinc-900/60">Last name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          required
          minLength={2}
          maxLength={30}
          className="rounded-md border px-2 py-1"
          onChange={handleChange}
          value={input.lastname}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-zinc-900/60">Age</label>
        <input
          id="age"
          name="age"
          type="text"
          minLength={2}
          maxLength={2}
          required
          className="rounded-md border py-1 px-2"
          onChange={handleChange}
          value={input.age}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-zinc-900/60">Player type</label>
        <select
          id="playerType"
          name="playerType"
          required
          className="rounded-md border px-1 py-2"
          onChange={handleChange}
        >
          <option value="CHASER">Chaser</option>
          <option value="SEEKER">Seeker</option>
          <option value="BEATER">Beater</option>
          <option value="KEEPER">Keeper</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-zinc-900/60">Player image</label>
        <input
          id="age"
          name="age"
          type="file"
          required
          className="rounded-md file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-sky-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-sky-700 hover:file:bg-sky-100"
          onChange={handleFileChange}
        />
      </div>
      <button className="mx-auto w-fit rounded-md bg-black px-4 py-2 text-white">
        Submit
      </button>
    </form>
  )
}
