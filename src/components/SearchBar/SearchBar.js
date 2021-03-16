import React from 'react'
import styled from 'styled-components/macro'
import Icon from 'supercons'

export default function SearchBar({ userInput, setUserInput }) {
  return (
    <InputLabel>
      <Icon style={{ color: '#87939F' }} glyph="search" size={30} />
      <Input
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
        maxLength={200}
        placeholder="Suche Buch oder AutorIn"
      />
    </InputLabel>
  )
}

const InputLabel = styled.label`
  grid-column: 1/3;
  justify-self: center;
  display: flex;
  padding: 5px;
  border: 1px solid #87939f;
  border-radius: 30px;
  background: white;
`

const Input = styled.input`
  border-radius: 25px;
  border: none;
  outline: 0 none;
  font-size: 16px;
`
