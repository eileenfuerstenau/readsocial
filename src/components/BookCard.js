import { React, useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import Icon from 'supercons'

export default function BookCard({
  id,
  cover,
  title,
  author,
  description,
  onBookmarkClick,
  bookmarkedBooks,
}) {
  const [isDescriptionExtended, setDescriptionExtended] = useState(false)

  return (
    <Card key={id}>
      <CoverWrapper>
        <img src={cover} alt="cover" width="75" height="110" />
      </CoverWrapper>
      <section>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Description>
          <span>{description.slice(0, 99)}</span>
          <span hidden={isDescriptionExtended}>...</span>
          <span hidden={!isDescriptionExtended}>{description.slice(99)}</span>
        </Description>
        <Button
          aria-label="expand-shrink-description"
          onClick={() => setDescriptionExtended(!isDescriptionExtended)}
        >
          {isDescriptionExtended ? 'Read less' : 'Read more'}
        </Button>
        <BookmarkButton onClick={() => onBookmarkClick(title)}>
          {bookmarkedBooks.includes(title) ? (
            <Icon style={{ color: '#f1613d' }} glyph="like-fill" size={45} />
          ) : (
            <Icon style={{ color: '#f1613d' }} glyph="like" size={45} />
          )}
        </BookmarkButton>
      </section>
    </Card>
  )
}

BookCard.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
}

const Card = styled.section`
  background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 2fr 5fr;
  border-radius: 5px;
  box-shadow: 0 2px 5px;
  padding: 5px 10px 15px 5px;
  position: relative;
`
const CoverWrapper = styled.span`
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 10px;
`
const Author = styled.h2`
  font-weight: normal;
  font-size: 90%;
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 100%;
  padding: 0 40px 0 0;
`
const Description = styled.p`
  font-weight: normal;
  font-size: 70%;
`

const BookmarkButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  top: 1px;
  right: 0.5px;
`
