import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import React from 'react'

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    const headline = screen.getByText(/Tomás Funes | Portfolio/i)
    expect(headline).toBeInTheDocument()
  })
})