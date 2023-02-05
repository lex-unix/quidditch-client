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
      <div className="mx-auto w-full max-w-4xl px-2 pt-14 md:px-8 md:pt-20">
        {children}
      </div>
    </>
  )
}
