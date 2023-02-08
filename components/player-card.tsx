import React from 'react'
import Image from 'next/image'
import { capitalizeFirstLetter } from '@/utils/text-transfrom'
import { useAtomValue } from 'jotai'
import { admin } from '@/store/admin'
import { TrashIcon } from './icons'
import { deletePlayer } from '@/lib/player'
import { useSWRConfig } from 'swr'
import { API_URL } from '@/lib/constants'

interface Props {
  id: number
  firstname: string
  lastname: string
  playerType: string
  age: number
  src: string
}

export default function PlayerCard(props: Props) {
  const { id, firstname, lastname, playerType, age, src } = props
  const isAdmin = useAtomValue(admin)
  const { mutate } = useSWRConfig()
  const name = `${firstname} ${lastname}`

  const handleDeletePlayer = async () => {
    const res = await deletePlayer(id)
    if (res.ok) {
      mutate(`${API_URL}/players/get-all`)
      mutate(`${API_URL}/teams/get-all`)
      console.log('Player deleted')
    }
  }

  return (
    <div className="mb-4">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-72 w-60 overflow-hidden rounded-sm">
          <Image
            src={src}
            alt={name}
            width={720}
            height={480}
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/70 px-4 pb-4 pt-2 text-gray-200">
            <span className="mb-4 font-cinzel text-lg font-semibold md:text-xl">
              {name}
            </span>
            <p className="font-medium">{age} years old</p>
            <p className="mt-2">
              {capitalizeFirstLetter(playerType.toLowerCase())}
            </p>
          </div>
          {isAdmin && (
            <div className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100/70 text-red-500">
              <button
                onClick={handleDeletePlayer}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100 text-red-500"
              >
                <TrashIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
