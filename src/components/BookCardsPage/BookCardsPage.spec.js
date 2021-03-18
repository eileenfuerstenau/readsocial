/* import BookCardsPage from './BookCardsPage'
import { render, screen } from '@testing-library/react'

describe('BookCardsPage', () => {
  it('renders two filterbuttons and multiple bookcards by default', () => {
    const testdata = {
      id: 35,
      cover: '/book-cover/1.jpg',
      title: 'Booktitle',
      author: 'John Doe',
      description:
        'Wie treffen wir unsere Entscheidungen? Warum ist Zögern ein überlebensnotwendiger Reflex?',
      bookmarkedBooks: '[Booktitle]',
      isDescriptionExtended: '[Test]',
      nominatedBooks: [
        {
          author: 'Test',
          title: 'This is a title',
          description: 'This is a description',
          id: '33',
        },
      ],
    }
    render(<BookCardsPage results={testdata} />)
    expect(screen.getAllByRole('button', { name: /filter/ })).toHaveLength(2)
    expect(screen.getByText('Ernest Hemingway')).toBeInTheDocument()
    expect(
      screen.getByText('Ichiro Kishimi, Fumitake Koga')
    ).toBeInTheDocument()
  })
})
 */
