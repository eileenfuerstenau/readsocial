import BookCardsPage from './BookCardsPage'
import { render, screen } from '@testing-library/react'

describe('BookCardsPage', () => {
  it('renders two filterbuttons and multiple bookcards by default', () => {
    render(<BookCardsPage />)
    expect(screen.getAllByRole('button', { name: /filter/ })).toHaveLength(2)
    expect(screen.getByText('Ernest Hemingway')).toBeInTheDocument()
    expect(
      screen.getByText('Ichiro Kishimi, Fumitake Koga')
    ).toBeInTheDocument()
  })
})
