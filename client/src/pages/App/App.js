import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../../components/Grid/Grid'
import Navigation from '../../components/Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components/macro'
import saveNominatedBook from '../../services/saveNominatedBook'
import getNominatedBooks from '../../services/getNominatedBooks'

export default function App() {
  const [nominatedBooks, setNominatedBooks] = useState([])

  useEffect(() => {
    getNominatedBooks().then(data => setNominatedBooks([...data]))
  }, [])

  function nominateBook(id, title, author, description) {
    const newNominatedBook = { id, title, author, description }
    setNominatedBooks([newNominatedBook, ...nominatedBooks])
    saveNominatedBook(id, title, author, description)
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
