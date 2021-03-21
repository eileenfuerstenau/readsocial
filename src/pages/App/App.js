import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../../components/Grid/Grid'
import Navigation from '../../components/Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components/macro'

export default function App() {
  const [nominatedBooks, setNominatedBooks] = useState([])

  function nominateBook(id, title, author, description) {
    const newNominatedBook = { id, title, author, description }
    setNominatedBooks([newNominatedBook, ...nominatedBooks])
  }

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <ExtendedHeader>Lass dich inspirieren</ExtendedHeader>
          <BookCardsPage
            onNominate={nominateBook}
            nominatedBooks={nominatedBooks}
          />
        </Route>
        <Route exact path="/voting">
          <Header>Wofür stimmst du?</Header>
          <VotingPage nominatedBooks={nominatedBooks} />
        </Route>
      </Switch>
      <Navigation />
    </Grid>
  )
}

const ExtendedHeader = styled(Header)`
  height: 80px;
  z-index: 5;
`
