import { books } from '../material/bookdata.json'
import BookCard from './BookCard'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <>
      <AppLayout>
        {books.map(card => (
          <BookCard
            key={card.id}
            cover={card.cover}
            title={card.title}
            author={card.author}
            description={card.content}
          />
        ))}
      </AppLayout>
    </>
  )
}

const AppLayout = styled.div`
  display: grid;
  gap: 0.2%;
  padding: 1%;
`
