import BookCardsPage from './BookCardsPage'
import { render, screen } from '@testing-library/react'

const testdata = {
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

describe('BookCardsPage', () => {
  it('renders two filterbuttons and multiple bookcards by default', () => {
    render(<BookCardsPage {...testdata} />)
    expect(screen.getAllByRole('button', { name: /filter/ })).toHaveLength(2)
    expect(screen.getByText('Ernest Hemingway')).toBeInTheDocument()
    expect(
      screen.getByText('Ichiro Kishimi, Fumitake Koga')
    ).toBeInTheDocument()
  })
})
