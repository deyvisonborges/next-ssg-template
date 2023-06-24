import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Touchable } from '@/common/components/touchable'

describe('App', () => {
  it('Vite to be in document', () => {
    render(<Touchable>Click me</Touchable>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
