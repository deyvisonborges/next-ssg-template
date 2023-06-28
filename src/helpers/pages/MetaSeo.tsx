import { AppConfig } from '@/app.config'
import { NextSeo } from 'next-seo'

type MetaSeoProps = {
  title: string
  description: string
  canonical?: string
}

export function MetaSeo(props: MetaSeoProps) {
  return (
    <NextSeo
      title={props.title ?? AppConfig.title}
      description={props.description ?? AppConfig.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title ?? AppConfig.title,
        description: props.description ?? AppConfig.description,
        url: props.canonical
      }}
    />
  )
}
