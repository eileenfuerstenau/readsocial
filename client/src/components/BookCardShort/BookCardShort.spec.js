import BookCardShort from './BookCardShort'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const testdataShort = {
  id: '3',
  cover: '/book-cover/3.jpg',
  title: 'Schnelles Denken, langsames Denken',
  author: 'Daniel Kahneman',
  votes: 0,
  description:
    'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex?',
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
  isVoted: [4, 5],
}

describe('BookCardShort', () => {
  it('renders a booktitle with an author and a button', () => {
    render(<BookCardShort {...testdataShort} />)
    expect(
      screen.getByText('Schnelles Denken, langsames Denken')
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'expand-shrink-description' })
    ).toBeInTheDocument()
  })

  it('calls setDescriptionExtended when the read-more button was clicked', () => {
    const setDescriptionExtended = jest.fn()
    render(
      <BookCardShort
        {...testdataShort}
        setDescriptionExtended={setDescriptionExtended}
      />
    )
    const extendButton = screen.getByRole('button', {
      name: 'expand-shrink-description',
    })
    userEvent.click(extendButton)
    expect(setDescriptionExtended).toHaveBeenCalledTimes(1)
  })
})
