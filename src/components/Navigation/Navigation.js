import React from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'

export default function Navigation() {
  return (
    <Nav>
      <NavButton>
        <Icon glyph="checkmark" size={30} />
        About
      </NavButton>
      <NavButton>
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
`

const NavButton = styled.div`
  display: grid;
  justify-items: center;
  color: ${props => (props.isActive ? '#f1613d' : '#87939F')};
  font-size: 60%;
`
