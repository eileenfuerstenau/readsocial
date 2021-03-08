import BookCard from './BookCard'
import { render, screen } from '@testing-library/react'

describe('BookCard', () => {
  it('renders a booktitle and an author', () => {
    render(<BookCard title="Booktitle" author="John Doe" />)
    expect(screen.getByText('Booktitle')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
