import styled from 'styled-components/macro'
import BookCardShort from '../BookCardShort/BookCardShort'
import { useState } from 'react'

export default function VotingPage({ nominatedBooks }) {
  const [isDescriptionExtended, setDescriptionExtended] = useState([])
  return (
    <VotingPageLayout>
      {console.log(nominatedBooks)}
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
    </VotingPageLayout>
  )
}

const VotingPageLayout = styled.div`
  padding: 0 2% 0 2%;
  display: grid;
  gap: 10px;
  overflow-y: scroll;
`
