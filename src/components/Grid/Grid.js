import React from 'react'
import styled from 'styled-components/macro'

export default function Grid({ children }) {
  return <AppGrid>{children}</AppGrid>
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
