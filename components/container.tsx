import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export default function Container(props: Props) {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto mb-4 w-full px-4 pt-20 md:mb-6 md:pt-20 lg:px-24">
        {children}
      </div>
    </>
  )
}
