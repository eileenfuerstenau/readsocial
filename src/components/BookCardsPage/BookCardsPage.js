import { books } from '../../material/bookdata.json'
import BookCard from '../BookCard/BookCard'
import styled from 'styled-components/macro'
import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

export default function BookCardsPage({ onNominate, nominatedBooks }) {
  const [bookmarkedBooks, setBookmarkedBooks] = useState([])
  const [booksShown, setBooksShown] = useState('all')
  const [descriptionExtended, setDescriptionExtended] = useState([])
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
              descriptionExtended={descriptionExtended}
              setDescriptionExtended={setDescriptionExtended}
              onNominate={onNominate}
              nominatedBooks={nominatedBooks}
            />
          ))}
      </BooksWrapper>
      <TabBarWrapper>
        <TabBarBackgroundPart />
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
      <NoFavoritesStatement>
        {bookmarkedBooks.length === 0 && booksShown === 'favorites'
          ? 'Du hast noch keine Favoriten.'
          : ' '}
      </NoFavoritesStatement>
    </CardsPageLayout>
  )
}

const CardsPageLayout = styled.main`
  position: relative;
  padding: 2%;
  overflow-y: scroll;
`
const TabBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: fixed;
  top: 48px;
  left: 0;
  z-index: 5;
  padding: 10px;
  border-radius: 0 0 20px 20px;
  background: transparent;
`

const TabBarBackgroundPart = styled.span`
  height: 70px;
  background: white;
  width: 100%;
  border-radius: 0 0 20px 20px;
  position: absolute;
  top: 32px;
  left: 0;
  z-index: -2;
`

const BooksWrapper = styled.div`
  padding: 0 2% 0 2%;
  display: grid;
  gap: 10px;

  &:first-child {
    padding-top: 88px;
  }

  &:before {
    background: #555eb8;
    height: 45px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    position: absolute;
    top: -10px;
    max-width: 800px;
  }
`
const PageButton = styled.button`
  border: none;
  border-bottom: ${props =>
    props.isActive ? '2px solid #f1613d' : '2px solid transparent'};
  background: transparent;
  font-size: 100%;
  justify-self: center;
  margin-top: 5px;
  padding: 2px;
`
const NoFavoritesStatement = styled.p`
  text-align: center;
`
