import React from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'

export default function Navigation(booksShown) {
  return (
    <Nav>
      <NavButton
        aria-label="about"
        as={NavLink}
        exact
        to="/"
        style={{ color: '#87939F' }}
        activeStyle={{
          color: '#f1613d',
        }}
      >
        <Icon glyph="checkmark" size={30} />
        Abstimmung
      </NavButton>
      <NavButton
        aria-label="inspiration"
        as={NavLink}
        to="/inspiration"
        style={{ color: '#87939F' }}
        activeStyle={{
          color: '#f1613d',
        }}
      >
        <Icon glyph="idea" size={30} />
        Inspiration
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
  color: '#87939F';
  font-size: 60%;
  text-decoration: none;
`
