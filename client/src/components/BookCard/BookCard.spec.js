import BookCard from './BookCard'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const testdataShort = {
  id: '3',
  cover: '/book-cover/3.jpg',
  title: 'Schnelles Denken, langsames Denken',
  author: 'Daniel Kahneman',
  description:
    'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex?',
  votes: 0,
  bookmarkedBooks: '[Becoming]',
  descriptionExtended: '[Herr aller Dinge]',
  nominatedBooks: [
    {
      author: 'Paulo Coelho',
      title: 'Veronika beschließt zu sterben',
      description:
        'Die Geschichte einer unglücklichen jungen Frau, die sterben will und erst angesichts des Todes entdeckt, wie schön das Leben sein kann, wenn man darum kämpft und etwas riskiert.',
      id: '21',
    },
  ],
}

const testdataLong = {
  id: '3',
  cover: '/book-cover/3.jpg',
  title: 'Schnelles Denken, langsames Denken',
  author: 'Daniel Kahneman',
  description:
    'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex, und warum ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?',
  votes: 0,
  bookmarkedBooks: '[Becoming]',
  descriptionExtended: '[Herr aller Dinge]',
  nominatedBooks: [
    {
      author: 'Paulo Coelho',
      title: 'Veronika beschließt zu sterben',
      description:
        'Die Geschichte einer unglücklichen jungen Frau, die sterben will und erst angesichts des Todes entdeckt, wie schön das Leben sein kann, wenn man darum kämpft und etwas riskiert.',
      id: '21',
    },
  ],
}

describe('BookCard', () => {
  it('renders a cover image, a booktitle, an author and a book description up to 100 characters', () => {
    render(<BookCard {...testdataShort} />)
    expect(screen.getByAltText('cover')).toBeInTheDocument()
    expect(
      screen.getByText('Schnelles Denken, langsames Denken')
    ).toBeInTheDocument()
    expect(screen.getByText('Daniel Kahneman')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex?'
      )
    ).toBeInTheDocument()
  })

  it('does not render a book description of more than 100 characters by default', () => {
    render(<BookCard {...testdataLong} />)
    expect(
      screen.getByText(
        'ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?'
      )
    ).not.toBeVisible()
  })

  it('calls setDescriptionExtended when the read-more button was clicked', () => {
    const setDescriptionExtended = jest.fn()
    render(
      <BookCard
        {...testdataLong}
        setDescriptionExtended={setDescriptionExtended}
      />
    )
    const extendButton = screen.getByRole('button', {
      name: 'expand-shrink-description',
    })
    userEvent.click(extendButton)
    expect(setDescriptionExtended).toHaveBeenCalledTimes(1)
  })

  it('calls onBookmarkClick with the respective booktitle on clicking the bookmark button', () => {
    const callback = jest.fn()
    render(<BookCard {...testdataLong} onBookmarkClick={callback} />)
    const bookmarkButton = screen.getByRole('button', {
      name: 'toggle-bookmarked',
    })
    userEvent.click(bookmarkButton)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('Schnelles Denken, langsames Denken')
  })

  it('calls onNominate with the respective id, booktitle, author, description and votes on clicking the nominate button', () => {
    const callback = jest.fn()
    render(<BookCard {...testdataLong} onNominate={callback} />)
    const bookmarkButton = screen.getByRole('button', {
      name: 'nominate',
    })
    userEvent.click(bookmarkButton)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith(
      '3',
      'Schnelles Denken, langsames Denken',
      'Daniel Kahneman',
      'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex, und warum ist es so schwer zu wissen, was uns in der Zukunft glücklich macht?',
      0
    )
  })
})
