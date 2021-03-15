import React from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'

export default function Navigation({
  onNavigate,
  currentPage,
  setCurrentPage,
}) {
  return (
    <Nav>
      <NavButton as={NavLink} exact to="/">
        <Icon glyph="checkmark" size={30} />
        About
      </NavButton>
      <NavButton as={NavLink} to="/inspiration">
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
`

const NavButton = styled.div`
  display: grid;
  justify-items: center;
  color: ${props => (props.isActive ? '#f1613d' : '#87939F')};
  font-size: 60%;
`
