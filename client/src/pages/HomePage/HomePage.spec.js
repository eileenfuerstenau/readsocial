import HomePage from './HomePage'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('HomePage', () => {
  it('renders a headline, a paragraph and the two navigation buttons and a svg', () => {
    render(<HomePage />, { wrapper: MemoryRouter })
    expect(screen.getByText(/Zur Abstimmung/i)).toBeInTheDocument()
    expect(screen.getByText(/Inspirier mich/i)).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(
      screen.getByText(
        /Finde zusammen mit deinen Freund:innen eure nächste gemeinsame Lektüre!/i
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/book-lover/i)).toBeInTheDocument()
  })
})
