import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../Grid/Grid'
import Navigation from '../Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'

export default function App() {
  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <VotingPage />
        </Route>
        <Route path="/inspiration">
          <BookCardsPage />
        </Route>
      </Switch>
      <Navigation />
    </Grid>
  )
}
