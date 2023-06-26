import { AppConfig } from '@/app.config'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: AppConfig.title,
  description: AppConfig.description,
  canonical: '',
  openGraph: {
    type: 'website',
    locale: AppConfig.locale,
    url: '',
    siteName: AppConfig.site_name,
    title: AppConfig.title,
    description: AppConfig.description,
    images: [
      {
        url: '/assets/seo/banner.jpg',
        width: 1200,
        height: 630,
        alt: ''
      }
    ]
  }
}
