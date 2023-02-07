import React from 'react'

interface Props {
  statName: string
  children: React.ReactNode
}

export default function StatsCard({ statName, children }: Props) {
  return (
    <div className="w-full bg-white py-4 px-6 lg:max-w-xl lg:py-6 lg:px-8">
      <div className="mb-4 lg:mb-6">
        <p className="text-center text-xl font-bold uppercase lg:text-3xl">
          {statName}
        </p>
      </div>
      {children}
    </div>
  )
}
