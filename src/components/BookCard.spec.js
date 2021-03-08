import BookCard from './BookCard'
import { render, screen } from '@testing-library/react'

describe('BookCard', () => {
  it('renders a cover image, a booktitle and an author', () => {
    render(
      <BookCard title="Booktitle" author="John Doe" cover="/book-cover/1.jpg" />
    )
    expect(screen.getByAltText('cover')).toBeInTheDocument()
    expect(screen.getByText('Booktitle')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
