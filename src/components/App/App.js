import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../Grid/Grid'
import Navigation from '../Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'
import { useState } from 'react'

export default function App() {
  const [nominatedBooks, setNominatedBooks] = useState([])

  function onNominate(id, title, author, description) {
    const newNominatedBook = { id, title, author, description }
    setNominatedBooks([...nominatedBooks, newNominatedBook])
  }

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <VotingPage nominatedBooks={nominatedBooks} />
        </Route>
        <Route path="/inspiration">
          <BookCardsPage
            onNominate={onNominate}
            nominatedBooks={nominatedBooks}
          />
        </Route>
      </Switch>
      <Navigation />
    </Grid>
  )
}
