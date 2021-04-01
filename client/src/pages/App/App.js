import BookCardsPage from '../BookCardsPage/BookCardsPage'
import { Route, Switch } from 'react-router-dom'
import Grid from '../../components/Grid/Grid'
import Navigation from '../../components/Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'
import HomePage from '../HomePage/HomePage'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components/macro'
import postNominatedBook from '../../services/postNominatedBook'
import getNominatedBooks from '../../services/getNominatedBooks'

export default function App() {
  const [nominatedBooks, setNominatedBooks] = useState([])

  useEffect(() => {
    getNominatedBooks().then(data => setNominatedBooks([...data]))
  }, [])

  function nominateBook(id, title, author, description, votes) {
    postNominatedBook(id, title, author, description, votes).then(data =>
      setNominatedBooks([data, ...nominatedBooks])
    )
  }

  return (
    <Grid>
      <Switch>
        <Route exact path="/">
          <DoubleExtendedHeader />
          <HomePage />
        </Route>
        <Route exact path="/inspiration">
          <ExtendedHeader>Lass dich inspirieren</ExtendedHeader>
          <BookCardsPage
            onNominate={nominateBook}
            nominatedBooks={nominatedBooks}
          />
        </Route>
        <Route exact path="/voting">
          <Header>Wofür stimmst du?</Header>
          <VotingPage
            nominatedBooks={nominatedBooks}
            setNominatedBooks={setNominatedBooks}
          />
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
const DoubleExtendedHeader = styled(Header)`
  height: 160px;
  z-index: 5;
`
