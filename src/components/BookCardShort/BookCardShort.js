import { React } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

export default function BookCardShort({
  id,
  title,
  author,
  description,
  isDescriptionExtended,
  setDescriptionExtended,
}) {
  let descriptionsExpandedArray
  function readmore(title) {
    if (isDescriptionExtended.includes(title)) {
      descriptionsExpandedArray = isDescriptionExtended.filter(
        book => book !== title
      )
    } else {
      descriptionsExpandedArray = [...isDescriptionExtended, title]
    }
    setDescriptionExtended(descriptionsExpandedArray)
  }

  return (
    <Card key={id}>
      <section>
        <Title>
          {title} von {author}
        </Title>
        <Description>
          <span>{description.slice(0, 99)}</span>
          <span hidden={isDescriptionExtended.includes(title)}>...</span>
          <span hidden={!isDescriptionExtended.includes(title)}>
            {description}
          </span>
        </Description>
        <Button
          aria-label="expand-shrink-description"
          onClick={() => readmore(title)}
        >
          {isDescriptionExtended.includes(title) ? 'Read less' : 'Read more'}
        </Button>
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

BookCardShort.propTypes = {
  id: PropTypes.string,
  cover: isPathToCover,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  /*  isDescriptionExtended,
  setDescriptionExtended, */
}

const Card = styled.section`
  border-radius: 5px;
  box-shadow: 0 2px 5px;
  padding: 5px 10px 10px 10px;
  position: relative;
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 90%;
  padding-right: 40px;
`

const Description = styled.p`
  font-weight: normal;
  font-size: 70%;
`
