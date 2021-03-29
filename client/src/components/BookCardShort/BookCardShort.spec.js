import BookCardShort from './BookCardShort'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const testdataShort = {
  id: '3',
  cover: '/book-cover/3.jpg',
  title: 'Schnelles Denken, langsames Denken',
  author: 'Daniel Kahneman',
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
      screen.getByText('Schnelles Denken, langsames Denken von Daniel Kahneman')
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

  it('calls onDelete when the delete button was clicked', () => {
    const onDelete = jest.fn()
    render(<BookCardShort {...testdataShort} onDelete={onDelete} />)
    const deleteButton = screen.getByRole('button', {
      name: 'delete-nominated',
    })
    userEvent.click(deleteButton)
    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onDelete).toHaveBeenCalledWith('3')
  })
})
