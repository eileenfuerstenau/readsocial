import BookCard from './BookCard'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('BookCard', () => {
  it('renders a cover image, a booktitle, an author and a book description up to 100 characters', () => {
    render(
      <BookCard
        title="Booktitle"
        author="John Doe"
        cover="/book-cover/1.jpg"
        description="Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex?"
      />
    )
    expect(screen.getByAltText('cover')).toBeInTheDocument()
    expect(screen.getByText('Booktitle')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex?'
      )
    ).toBeInTheDocument()
  })

  it('does not render a book description of more than 100 characters by default', () => {
    render(
      <BookCard
        title="Booktitle"
        author="John Doe"
        cover="/book-cover/1.jpg"
        description="Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex, und warum ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?"
      />
    )
    expect(
      screen.getByText(
        'ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?'
      )
    ).not.toBeVisible()
  })

  it('renders a book description of more than 100 characters if read-more button was clicked', () => {
    render(
      <BookCard
        title="Booktitle"
        author="John Doe"
        cover="/book-cover/1.jpg"
        description="Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex, und warum ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?"
      />
    )
    const extendButton = screen.getByRole('button', { name: 'Read more' })
    // expect(extendButton).toHaveTextContent(/Read more/i)
    userEvent.click(extendButton)
    expect(
      screen.getByText(
        'ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?'
      )
    ).toBeVisible()
  })
})
