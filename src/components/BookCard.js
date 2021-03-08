import React from 'react'
import styled from 'styled-components/macro'

export default function BookCard({ id, cover, title, author }) {
  return (
    <Card key={id}>
      <CoverWrapper>
        <img src={cover} alt="" width="75" height="110" />
      </CoverWrapper>
      <section>
        <h2>{title}</h2>
        <Author>{author}</Author>
      </section>
    </Card>
  )
}

const Card = styled.section`
  background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 2fr 5fr;
`
const CoverWrapper = styled.span`
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 10px;
`
const Author = styled.h3`
  font-weight: normal;
`
