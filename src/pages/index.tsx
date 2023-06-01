import { Inter } from 'next/font/google'
import { Meta } from '@/layouts/Meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Meta
        title="Next.js Boilerplate"
        description="Next js Boilerplate is the perfect starter code for your project."
      />
      <main className={`flex min-h-screen ${inter.className}`}>
        <p className={`text-sm`}>Home page</p>
      </main>
    </>
  )
}
