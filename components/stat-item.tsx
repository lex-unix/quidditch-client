import React from 'react'

interface Props {
  position: number
  children: React.ReactNode
}

export default function StatsItem(props: Props) {
  const { position, children } = props

  return (
    <div className="flex items-center gap-8 border-b border-b-gray-300 py-4 text-sm last:border-b-0">
      <p className="font-bold">{position}</p>
      <div className="flex items-center gap-1 font-bold uppercase">
        {children}
      </div>
    </div>
  )
}
