import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function LatestNewsCard({ children }: Props) {
  return (
    <div className="w-full rounded-md border border-gray-300/40 bg-white py-6 px-8 lg:py-8 lg:px-12">
      <div className="mb-10 flex items-center">
        <h3 className="mr-2 text-lg font-bold uppercase lg:mr-8 lg:text-2xl">
          latest news
        </h3>
        <div className="mr-2 h-[20px] w-[1px] bg-gray-300 lg:mr-8"></div>
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
