import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../Grid/Grid'
import Navigation from '../Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'
import { useState } from 'react'
import Header from '../Header/Header'

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
          <Header>Lass dich inspirieren</Header>
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
