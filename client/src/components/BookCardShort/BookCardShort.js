import { React } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Icon from 'supercons'

export default function BookCardShort({
  id,
  title,
  author,
  votes,
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
        <ReadMoreButton
          role="button"
          aria-label="expand-shrink-description"
          onClick={() => readmore(title)}
        >
          {descriptionExtended.includes(title) ? 'Weniger' : 'Mehr'}
        </ReadMoreButton>
      </section>
      <DeleteButton
        role="button"
        hidden={!hasVoted || votes}
        aria-label="delete-nominated"
        onClick={() => onDelete(id)}
      >
        <Icon style={{ color: 'var(--darkgrey)' }} glyph="delete" size={35} />
      </DeleteButton>
      <VoteButton
        hidden={hasVoted}
        role="button"
        aria-label="vote-nominated"
        onClick={() => handleVote(id)}
      >
        {!isVoted.includes(id) ? (
          <Icon style={{ color: 'var(--orange)' }} glyph="checkbox" size={55} />
        ) : (
          <Icon
            style={{ color: 'var(--orange)' }}
            glyph="checkmark"
            size={55}
          />
        )}
      </VoteButton>
      <ResultWrapper hidden={!hasVoted}>
        <Result>{votes}</Result>
      </ResultWrapper>
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

const ReadMoreButton = styled.div`
  background: var(--orange);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 4px;
  box-shadow: 2px 1px 4px #f37a72;
  width: 90px;
  margin-right: 15px;
  font-size: 65%;
  text-align: center;
`

const VoteButton = styled.div`
  background: transparent;
  border: none;
  position: absolute;
  right: -3px;
  top: 0;
`
const Result = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  color: var(--darkgrey);
  border: 2px solid var(--darkgrey);
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 5px;
  height: 40px;
  width: 40px;
`

const ResultWrapper = styled.div`
  color: transparent;
`
