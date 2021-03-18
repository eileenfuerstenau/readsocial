import styled from 'styled-components/macro'
import BookCardShort from '../BookCardShort/BookCardShort'
import { useState } from 'react'

export default function VotingPage({ nominatedBooks }) {
  const [isDescriptionExtended, setDescriptionExtended] = useState([])

  return (
    <VotingPageLayout>
      <BooksWrapper>
        {nominatedBooks.map(({ id, title, author, description }) => (
          <BookCardShort
            id={id}
            title={title}
            author={author}
            description={description}
            isDescriptionExtended={isDescriptionExtended}
            setDescriptionExtended={setDescriptionExtended}
          />
        ))}
      </BooksWrapper>
      <EmptyShortListStatement>
        {nominatedBooks.length === 0 && 'Die Shortlist ist noch leer.'}
      </EmptyShortListStatement>
    </VotingPageLayout>
  )
}

const VotingPageLayout = styled.div`
  position: relative;
  padding: 2%;
  overflow-y: scroll;
`
const BooksWrapper = styled.div`
  padding: 0 2% 0 2%;
  display: grid;
  gap: 10px;
`

const EmptyShortListStatement = styled.div`
  text-align: center;
`
