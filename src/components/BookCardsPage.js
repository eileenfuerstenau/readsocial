import { books } from '../material/bookdata.json'
import BookCard from './BookCard'
import styled from 'styled-components/macro'
import React, { useState } from 'react'

export default function BookCardsPage() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([])
  const [booksShown, setBooksShown] = useState('all')

  let bookmarkedBooksArray
  function handleBookmarkClick(currentBook) {
    if (bookmarkedBooks.includes(currentBook)) {
      bookmarkedBooksArray = bookmarkedBooks.filter(
        book => book !== currentBook
      )
    } else {
      bookmarkedBooksArray = [...bookmarkedBooks, currentBook]
    }
    setBookmarkedBooks(bookmarkedBooksArray)
  }

  return (
    <>
      <CardspageLayout>
        <ButtonWrapper>
          <PageButton
            isActive={booksShown === 'all'}
            onClick={() => setBooksShown('all')}
          >
            Alle
          </PageButton>
          <PageButton
            isActive={booksShown === 'favorites'}
            onClick={() => setBooksShown('favorites')}
          >
            Favoriten
          </PageButton>
        </ButtonWrapper>

        {books
          .filter(
            book => booksShown === 'all' || bookmarkedBooks.includes(book.title)
          )
          .map(card => (
            <BookCard
              key={card.id}
              cover={card.cover}
              title={card.title}
              author={card.author}
              description={card.content}
              onBookmarkClick={handleBookmarkClick}
              bookmarkedBooks={bookmarkedBooks}
            />
          ))}
      </CardspageLayout>
    </>
  )
}

const CardspageLayout = styled.div`
  display: grid;
  gap: 10px;
  padding: 1%;
`
const ButtonWrapper = styled.div`
  justify-content: space-around;
  display: flex;
`
const PageButton = styled.button`
  border: none;
  border-bottom: ${props => (props.isActive ? '2px solid #f1613d' : 'none')};
  background: transparent;
  font-size: 100%;
  padding: 5px;
`
