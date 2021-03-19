import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../Grid/Grid'
import Navigation from '../Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'
import { useState } from 'react'

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
          <VotingPage nominatedBooks={nominatedBooks} />
        </Route>
        <Route path="/inspiration">
          <BookCardsPage
            onNominate={nominateBook}
            nominatedBooks={nominatedBooks}
          />
        </Route>
      </Switch>
      <Route exact path={['/', '/inspiration']}>
        <Navigation />
      </Route>
    </Grid>
  )
}
