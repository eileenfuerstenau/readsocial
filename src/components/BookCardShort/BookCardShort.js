import { React } from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

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
          {isDescriptionExtended.includes(title) ? 'Weniger' : 'Mehr'}
        </Button>
      </section>
    </Card>
  )
}

BookCardShort.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  isDescriptionExtended: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  setDescriptionExtended: PropTypes.func,
}

const Card = styled.section`
  border-radius: 5px;
  box-shadow: 0 2px 5px;
  padding: 5px 10px 10px 10px;
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
