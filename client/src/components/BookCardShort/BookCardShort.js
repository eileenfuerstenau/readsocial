import { React } from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import Icon from 'supercons'

export default function BookCardShort({
  id,
  title,
  author,
  description,
  descriptionExtended,
  setDescriptionExtended,
  onDelete,
  isVoted,
  setIsVoted,
  hasVoted,
}) {
  let descriptionsExpandedArray
  function readmore(title) {
    if (descriptionExtended.includes(title)) {
      descriptionsExpandedArray = descriptionExtended.filter(
        book => book !== title
      )
    } else {
      descriptionsExpandedArray = [...descriptionExtended, title]
    }
    setDescriptionExtended(descriptionsExpandedArray)
  }

  let handleVoteArray
  function handleVote(id) {
    if (isVoted.includes(id)) {
      handleVoteArray = isVoted.filter(book => book !== id)
    } else {
      handleVoteArray = [...isVoted, id]
    }
    setIsVoted(handleVoteArray)
  }

  return (
    <Card key={id} id={id}>
      <section>
        <Title>{title}</Title>
        <Author>von {author}</Author>
        <Description>
          <span hidden={!descriptionExtended.includes(title)}>
            {description}
          </span>
        </Description>
        <Button
          aria-label="expand-shrink-description"
          onClick={() => readmore(title)}
        >
          {descriptionExtended.includes(title) ? 'Weniger' : 'Mehr'}
        </Button>
      </section>
      <DeleteButton
        role="button"
        disabled={isVoted.includes(id) || hasVoted}
        aria-label="delete-nominated"
        onClick={() => onDelete(id)}
      >
        <Icon style={{ color: 'var(--darkgrey)' }} glyph="delete" size={35} />
      </DeleteButton>
      <VoteButton
        role="button"
        aria-label="vote-nominated"
        onClick={() => handleVote(id)}
      >
        {!isVoted.includes(id) || hasVoted ? (
          <Icon style={{ color: 'var(--orange)' }} glyph="checkbox" size={55} />
        ) : (
          <Icon
            style={{ color: 'var(--orange)' }}
            glyph="checkmark"
            size={55}
          />
        )}
      </VoteButton>
    </Card>
  )
}

BookCardShort.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  descriptionExtended: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  setDescriptionExtended: PropTypes.func,
}

const Card = styled.section`
  background-color: var(--grey);
  border-radius: 5px;
  box-shadow: 0 2px 5px;
  padding: 5px 10px 10px 10px;
  position: relative;
  height: min-content;
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 90%;
  padding-right: 40px;
`
const Author = styled.h3`
  font-weight: lighter;
  font-size: 80%;
  padding-right: 40px;
`

const Description = styled.p`
  font-weight: normal;
  font-size: 70%;
`
const DeleteButton = styled.div`
  background: transparent;
  border: none;
  position: absolute;
  right: 7px;
  bottom: 2px;
`
const VoteButton = styled.div`
  background: transparent;
  border: none;
  position: absolute;
  right: -3px;
  top: 0;
`
