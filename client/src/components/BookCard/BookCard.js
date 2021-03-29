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
  votes,
  onBookmarkClick,
  bookmarkedBooks,
  descriptionExtended,
  setDescriptionExtended,
  onNominate,
  nominatedBooks,
}) {
  const isBookNominated = nominatedBooks.some(
    nominatedBook => nominatedBook.title === title
  )

  let descriptionsExpandedArray
  function handleReadMore(title) {
    if (descriptionExtended.includes(title)) {
      descriptionsExpandedArray = descriptionExtended.filter(
        book => book !== title
      )
    } else {
      descriptionsExpandedArray = [...descriptionExtended, title]
    }
    setDescriptionExtended(descriptionsExpandedArray)
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
          <span hidden={descriptionExtended.includes(title)}>...</span>
          <span hidden={!descriptionExtended.includes(title)}>
            {description.slice(99)}
          </span>
        </Description>
        <Button
          aria-label="expand-shrink-description"
          onClick={() => handleReadMore(title)}
        >
          {descriptionExtended.includes(title) ? 'Weniger' : 'Mehr'}
        </Button>
        <NominateButton
          aria-label="nominate"
          disabled={isBookNominated}
          onClick={() => onNominate(id, title, author, description, votes)}
        >
          {isBookNominated ? 'Nominiert' : 'Nominieren'}
        </NominateButton>
        <BookmarkButton
          aria-label="toggle-bookmarked"
          onClick={() => onBookmarkClick(title)}
        >
          {bookmarkedBooks.includes(title) ? (
            <Icon
              style={{ color: 'var(--orange)' }}
              glyph="like-fill"
              size={45}
            />
          ) : (
            <Icon style={{ color: 'var(--orange)' }} glyph="like" size={45} />
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cover: isPathToCover,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  onBookmarkClick: PropTypes.func,
  bookmarkedBooks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  descriptionExtended: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  setDescriptionExtended: PropTypes.func,
  onNominate: PropTypes.func,
  nominatedBooks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

const Card = styled.section`
  background-color: var(--grey);
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
const BookmarkButton = styled.button`
  position: absolute;
  top: 1px;
  right: 0.5px;
  background: transparent;
  border: none;
`
const NominateButton = styled(Button)`
  background: ${props => props.disabled && 'lightgrey'};
  box-shadow: ${props => props.disabled && 'none'};
`
