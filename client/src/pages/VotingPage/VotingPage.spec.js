import VotingPage from './VotingPage'
import { render, screen } from '@testing-library/react'

const testdata = {
  nominatedBooks: [
    {
      author: 'Paulo Coelho',
      title: 'Veronika beschließt zu sterben',
      description:
        'Die Geschichte einer unglücklichen jungen Frau, die sterben will und erst angesichts des Todes entdeckt, wie schön das Leben sein kann, wenn man darum kämpft und etwas riskiert.',
      _id: '21',
    },
  ],
}

describe('VotingPage', () => {
  it('renders nominated bookcards by default', () => {
    render(<VotingPage {...testdata} />)
    expect(
      screen.getByText('Veronika beschließt zu sterben von Paulo Coelho')
    ).toBeInTheDocument()
  })
})
