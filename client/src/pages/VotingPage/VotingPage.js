import styled from 'styled-components/macro'
import BookCardShort from '../../components/BookCardShort/BookCardShort'
import { useState } from 'react'

export default function VotingPage({ onDelete, nominatedBooks }) {
  const [descriptionExtended, setDescriptionExtended] = useState([])

  return (
    <VotingPageLayout>
      <BooksWrapper>
        {nominatedBooks.map(({ _id, title, author, description }) => (
          <BookCardShort
            key={_id}
            id={_id}
            title={title}
            author={author}
            description={description}
            descriptionExtended={descriptionExtended}
            setDescriptionExtended={setDescriptionExtended}
            onDelete={onDelete}
          />
        ))}
      </BooksWrapper>
      <EmptyShortListStatement>
        {nominatedBooks.length === 0 && 'Die Shortlist ist noch leer.'}
      </EmptyShortListStatement>
    </VotingPageLayout>
  )
}

const VotingPageLayout = styled.main`
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
