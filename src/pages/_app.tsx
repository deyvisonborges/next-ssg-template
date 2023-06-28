import '@/layout/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import DefaultSeoConfig from '../../next-seo.config'
import { NormalizeStyles } from '@/layout/normalize'
import { theme } from '@/layout/theme'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <DefaultSeo {...DefaultSeoConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
