import React from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'

export default function Navigation(booksShown) {
  return (
    <Nav>
      <NavButton
        aria-label="inspiration"
        as={NavLink}
        exact
        to="/"
        style={{ color: 'var(--darkgrey)' }}
        activeStyle={{
          color: 'var(--orange)',
        }}
      >
        <Icon glyph="idea" size={30} />
        Inspiration
      </NavButton>
      <NavButton
        aria-label="voting"
        as={NavLink}
        to="/voting"
        style={{ color: 'var(--darkgrey)' }}
        activeStyle={{
          color: 'var(--orange)',
        }}
      >
        <Icon glyph="checkmark" size={30} />
        Abstimmung
      </NavButton>
    </Nav>
  )
}

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-radius: 15px 15px 0 0;
  background: white;
  box-shadow: 0 2px 5px;
`

const NavButton = styled.button`
  display: grid;
  justify-items: center;
  font-size: 60%;
  text-decoration: none;
`
