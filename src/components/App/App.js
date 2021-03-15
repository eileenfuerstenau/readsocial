import BookCardsPage from '../BookCardsPage/BookCardsPage'
import styled from 'styled-components/macro'
// import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from '../Grid/Grid'
import Navigation from '../Navigation/Navigation'
import VotingPage from '../VotingPage/VotingPage'

export default function App() {
  return (
    <AppLayout>
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
    </AppLayout>
  )
}

const AppLayout = styled.div`
  overflow-y: scroll;
  background: #efefef;
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
