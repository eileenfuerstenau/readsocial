import styled from 'styled-components/macro'
import BookCardShort from '../../components/BookCardShort/BookCardShort'
import { useState } from 'react'
import voteBook from '../../services/voteBook'
import getNominatedBooks from '../../services/getNominatedBooks'

export default function VotingPage({
  setNominatedBooks,
  onDelete,
  nominatedBooks,
}) {
  const [descriptionExtended, setDescriptionExtended] = useState([])

  return (
    <VotingPageLayout>
      <BooksWrapper>
        {nominatedBooks.map(
          ({ _id, title, author, description, votes }, index) => (
            <BookCardShort
              key={_id}
              id={_id}
              title={title}
              author={author}
              description={description}
              votes={votes}
              descriptionExtended={descriptionExtended}
              setDescriptionExtended={setDescriptionExtended}
              onDelete={onDelete}
              onVote={() => handleVote(index)}
            />
          )
        )}
      </BooksWrapper>
      <EmptyShortListStatement>
        {nominatedBooks.length === 0 && 'Die Shortlist ist noch leer.'}
      </EmptyShortListStatement>
    </VotingPageLayout>
  )

  function handleVote(index) {
    const nominatedBook = nominatedBooks[index]
    setNominatedBooks([
      ...nominatedBooks.slice(0, index),
      { ...nominatedBook, votes: nominatedBook.votes + 1 },
      ...nominatedBooks.slice(index + 1),
    ])
    voteBook(nominatedBook._id).finally(() => {
      getNominatedBooks().then(nominatedBooks =>
        setNominatedBooks(nominatedBooks)
      )
    })
  }
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
