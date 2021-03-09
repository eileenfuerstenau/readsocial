import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

export default function BookCard({ id, cover, title, author, description }) {
  const [isDescriptionExtended, setDescriptionExtended] = React.useState(false)

  return (
    <Card key={id}>
      <CoverWrapper>
        <img src={cover} alt="cover" width="75" height="110" />
      </CoverWrapper>
      <section>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Description hidden={isDescriptionExtended}>
          {description.slice(0, 99)} ...
        </Description>
        <Button
          aria-label="expand-description"
          hidden={isDescriptionExtended}
          onClick={() => setDescriptionExtended(!isDescriptionExtended)}
        >
          Read more
        </Button>
        <Description hidden={!isDescriptionExtended}>{description}</Description>
        <Button
          aria-label="shrink-description"
          hidden={!isDescriptionExtended}
          onClick={() => setDescriptionExtended(!isDescriptionExtended)}
        >
          Read less
        </Button>
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
`
const Description = styled.p`
  font-weight: normal;
  font-size: 70%;
`
