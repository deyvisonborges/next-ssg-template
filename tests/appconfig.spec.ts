import '@testing-library/jest-dom'
import { AppConfig } from '@/app.config'

describe('Home', () => {
  it('renders a heading', () => {
    expect(AppConfig.title).toEqual('Next.js SSG Template')
  })
})
