import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../Grid/Grid'
import Navigation from '../Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'

export default function App() {
  const nominatedBooks = []
  function onNominate(id, title, author, description) {
    nominatedBooks.push({ id, title, author, description })
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
