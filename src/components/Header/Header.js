import styled from 'styled-components/macro'

export default function Header({ title }) {
  return (
    <AppHeader>
      <Title>{title}</Title>
    </AppHeader>
  )
}
const AppHeader = styled.header`
  background: #555eb8;
  color: white;
  border-radius: 0 0 10px 10px;
  font-size: 80%;
  z-index: 5;
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding: 10px;
  font-weight: lighter;
`
