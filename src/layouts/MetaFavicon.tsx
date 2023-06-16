export function MetaFavicon() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link
        rel="apple-touch-icon"
        href={`/assets/seo/apple-touch-icon.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/assets/seo/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/assets/seo/favicon-16x16.png`}
        key="icon16"
      />
      <link rel="icon" href={`/assets/seo/favicon.ico`} key="favicon" />
    </>
  )
}
