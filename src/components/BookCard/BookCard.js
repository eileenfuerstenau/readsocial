import { React } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Icon from 'supercons'

export default function BookCard({
  id,
  cover,
  title,
  author,
  description,
  onBookmarkClick,
  bookmarkedBooks,
  isDescriptionExtended,
  setDescriptionExtended,
}) {
  let DescriptionsExpandedArray
  function readmore(title) {
    if (isDescriptionExtended.includes(title)) {
      DescriptionsExpandedArray = isDescriptionExtended.filter(
        book => book !== title
      )
    } else {
      DescriptionsExpandedArray = [...isDescriptionExtended, title]
    }
    setDescriptionExtended(DescriptionsExpandedArray)
  }

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
          <span hidden={isDescriptionExtended.includes(title)}>...</span>
          <span hidden={!isDescriptionExtended.includes(title)}>
            {description.slice(99)}
          </span>
        </Description>
        <Button
          aria-label="expand-shrink-description"
          onClick={() => readmore(title)}
        >
          {isDescriptionExtended.includes(title) ? 'Read less' : 'Read more'}
        </Button>
        <BookmarkButton
          role="button"
          aria-label="toggle-bookmarked"
          onClick={() => onBookmarkClick(title)}
        >
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

const isPathToCover = function (props, pathToCover) {
  const pathEnd = /.(png|jpeg|jpg)/
  if (!pathEnd.test(props[pathToCover])) {
    return new Error(`Expected a valid path to book cover.`)
  }
}

BookCard.propTypes = {
  id: PropTypes.string,
  cover: isPathToCover,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  onBookmarkClick: PropTypes.func,
  bookmarkedBooks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
  align-content: start;
  justify-content: center;
  padding: 15px 10px;
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 90%;
  padding-right: 40px;
`
const Author = styled.h3`
  font-weight: normal;
  font-size: 80%;
`
const Description = styled.p`
  font-weight: normal;
  font-size: 70%;
`
const BookmarkButton = styled.span`
  position: absolute;
  top: 1px;
  right: 0.5px;
`
