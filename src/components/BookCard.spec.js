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
        bookmarkedBooks="[Booktitle]"
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
        bookmarkedBooks="[Booktitle]"
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
        bookmarkedBooks="[Booktitle]"
      />
    )
    const extendButton = screen.getByRole('button', {
      name: 'expand-shrink-description',
    })
    userEvent.click(extendButton)
    expect(
      screen.getByText(
        'ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?'
      )
    ).toBeVisible()
  })

  it('calls onBookmarkClick with the respective booktitle on clicking the bookmark button', () => {
    const callback = jest.fn()
    render(
      <BookCard
        title="Booktitle"
        author="John Doe"
        cover="/book-cover/1.jpg"
        description="Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex, und warum ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?"
        bookmarkedBooks="[Other]"
        onBookmarkClick={callback}
      />
    )
    const bookmarkButton = screen.getByRole('button', {
      name: 'toggle-bookmarked',
    })
    userEvent.click(bookmarkButton)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('Booktitle')
  })
})
