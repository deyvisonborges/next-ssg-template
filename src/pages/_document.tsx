import { MetaFavicon } from '@/layouts/MetaFavicon'
import { Html, Head, Main, NextScript } from 'next/document'
import DefaultSeoConfig from '../../next-seo.config'

export default function Document() {
  return (
    <Html lang={DefaultSeoConfig.openGraph.locale}>
      <Head>
        <MetaFavicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
