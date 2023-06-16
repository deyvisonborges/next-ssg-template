import { NextSeo } from 'next-seo'

import DefaultSeoConfig from '../../next-seo.config'

type MetaSeoProps = {
  title: string
  description: string
  canonical?: string
}

export function MetaSeo(props: MetaSeoProps) {
  return (
    <NextSeo
      title={props.title ?? DefaultSeoConfig.title}
      description={props.description ?? DefaultSeoConfig.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title ?? DefaultSeoConfig.title,
        description: props.description ?? DefaultSeoConfig.description,
        url: props.canonical ?? DefaultSeoConfig.canonical
      }}
    />
  )
}
