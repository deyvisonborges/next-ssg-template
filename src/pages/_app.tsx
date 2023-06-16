import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

import DefaultSeoConfig from '../../next-seo.config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <DefaultSeo {...DefaultSeoConfig} />
      <Component {...pageProps} />
    </main>
  )
}
