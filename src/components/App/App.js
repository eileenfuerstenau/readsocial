import BookCardsPage from '../BookCardsPage/BookCardsPage'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <AppLayout>
      <BookCardsPage />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  background: #efefef;
  overflow-y: scroll;
`
