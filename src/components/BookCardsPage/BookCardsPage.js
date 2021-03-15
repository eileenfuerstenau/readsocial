import { books } from '../../material/bookdata.json'
import BookCard from '../BookCard/BookCard'
import styled from 'styled-components/macro'
import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

export default function BookCardsPage() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([])
  const [booksShown, setBooksShown] = useState('all')
  const [isDescriptionExtended, setDescriptionExtended] = useState([])
  const [userInput, setUserInput] = useState('')

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
    <CardsPageLayout>
      <TabBarWrapper>
        <SearchBar userInput={userInput} setUserInput={setUserInput} />
        <PageButton
          aria-label="filter-all"
          isActive={booksShown === 'all'}
          onClick={() => {
            setBooksShown('all')
            setDescriptionExtended([])
          }}
        >
          Alle
        </PageButton>
        <PageButton
          aria-label="filter-favorites"
          isActive={booksShown === 'favorites'}
          onClick={() => {
            setBooksShown('favorites')
            setDescriptionExtended([])
          }}
        >
          Favoriten
        </PageButton>
      </TabBarWrapper>
      <BooksWrapper>
        {books
          .filter(
            book => booksShown === 'all' || bookmarkedBooks.includes(book.title)
          )
          .filter(
            book =>
              book.title.toLowerCase().includes(userInput.toLowerCase()) ||
              book.author.toLowerCase().includes(userInput.toLowerCase())
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
              isDescriptionExtended={isDescriptionExtended}
              setDescriptionExtended={setDescriptionExtended}
            />
          ))}
      </BooksWrapper>
      <NoFavoritesStatement>
        {bookmarkedBooks.length === 0 && booksShown === 'favorites'
          ? 'Du hast noch keine Favoriten.'
          : ' '}
      </NoFavoritesStatement>
    </CardsPageLayout>
  )
}

const CardsPageLayout = styled.div`
  position: relative;
  padding: 2%;
  &:first-child {
    padding-top: 105px;
  }
`
const TabBarWrapper = styled.div`
  display: grid;
  background: white;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  padding: 10px;
  border-radius: 0 0 10px 10px;
`

const BooksWrapper = styled.div`
  padding: 0 2% 0 2%;
  display: grid;
  gap: 10px;
`

const PageButton = styled.button`
  border: none;
  border-bottom: ${props =>
    props.isActive ? '2px solid #f1613d' : '2px solid transparent'};
  background: transparent;
  font-size: 100%;
  padding: 5px;
  justify-self: center;
  margin-top: 5px;
`
const NoFavoritesStatement = styled.p`
  text-align: center;
`
