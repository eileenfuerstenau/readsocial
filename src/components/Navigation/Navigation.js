import React from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'

export default function Navigation() {
  return (
    <Nav>
      <NavButton>
        <Icon glyph="checkmark" size={35} />
      </NavButton>
      <NavButton>
        <Icon glyph="idea" size={35} />
      </NavButton>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
`

const NavButton = styled.div`
  display: flex;
  justify-items: space-around;
  color: ${props => (props.isActive ? '#f1613d' : '#87939F')};
`
