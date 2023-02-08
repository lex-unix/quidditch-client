import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Cinzel } from '@next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${cinzel.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
