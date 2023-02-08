import React from 'react'
import { capitalizeFirstLetter } from '@/utils/text-transfrom'

interface Props {
  teamName: string
  children: React.ReactNode
}

export default function Team({ teamName, children }: Props) {
  return (
    <div className="mb-5">
      <div className="mb-2">
        <h2 className="font-cinzel text-2xl font-bold">
          {capitalizeFirstLetter(teamName.toLowerCase())}
        </h2>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-1 md:w-full md:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </div>
  )
}
