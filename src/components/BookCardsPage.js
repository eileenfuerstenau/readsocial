import { books } from '../material/bookdata.json'
import BookCard from './BookCard'
import styled from 'styled-components/macro'
import React, { useState } from 'react'

export default function BookCardsPage() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([])

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
        {books.map(card => (
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
  gap: 0.2%;
  padding: 1%;
`
