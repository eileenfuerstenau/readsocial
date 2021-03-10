import BookCardsPage from './BookCardsPage'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <>
      <AppLayout>
        <BookCardsPage />
      </AppLayout>
    </>
  )
}

const AppLayout = styled.div`
  margin: 0;
`
