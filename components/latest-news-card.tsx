import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function LatestNewsCard({ children }: Props) {
  return (
    <div className="w-full rounded-md border border-gray-300/40 bg-white py-6 px-8 shadow-md md:py-8 md:px-12">
      <div className="mb-4 flex items-center md:mb-8">
        <h3 className="mr-2 font-cinzel text-lg font-bold uppercase md:mr-4 md:text-xl">
          latest news
        </h3>
        <div className="mr-2 h-[20px] w-[1px] bg-gray-300 md:mr-4"></div>
        <Link
          className="text-rose-800 underline underline-offset-2"
          href="/news"
        >
          See more
        </Link>
      </div>
      {children}
    </div>
  )
}
