import React from 'react'

interface Props {
  statName: string
  className?: string
  children: React.ReactNode
}

export default function StatsCard({ statName, className, children }: Props) {
  return (
    <div
      className={`w-full bg-white py-4 px-6 md:w-[50%] lg:py-6 lg:px-8 ${className}`}
    >
      <div className="mb-4 lg:mb-6">
        <p className="text-center text-lg font-bold uppercase md:text-xl">
          {statName}
        </p>
      </div>
      {children}
    </div>
  )
}
