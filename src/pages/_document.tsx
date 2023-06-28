import { Html, Head, Main, NextScript } from 'next/document'
import DefaultSeoConfig from '../../next-seo.config'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MetaFavicon } from '@/helpers/pages/MetaFavicon'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
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
}
