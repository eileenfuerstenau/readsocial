import React from 'react'
import styled from 'styled-components/macro'

export default function BookCard({ id, cover, title, author }) {
  return (
    <Card key={id}>
      <img src="{cover}" alt=""></img>
      <section>
        <h2>{title}</h2>
        <h2>{author}</h2>
      </section>
    </Card>
  )
}

const Card = styled.section`
  background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 2fr 5fr;
`
