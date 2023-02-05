import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const capitalizeFirstLetter = ([first, ...rest]: string) => {
  return first.toUpperCase() + rest.join('')
}

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="rounded-sm bg-sky-100 py-0.5 px-1">
      <p className="text-sm text-sky-700">
        {capitalizeFirstLetter(tag.toLowerCase())}
      </p>
    </div>
  )
}

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
  const name = `${firstname} ${lastname}`

  return (
    <div className="mb-4 rounded-md border px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src={src}
            alt={name}
            width={720}
            height={480}
            className="absolute inset-0 h-[60px] w-[90px]"
          />
        </div>
        <div>
          <div className="flex">
            <p className="mr-2">{name}</p>
            <Tag tag={playerType} />
          </div>
          <p>{age}</p>
          <Link href={`/players/${id}`}>View Player</Link>
        </div>
      </div>
    </div>
  )
}
