import SearchBar from './SearchBar'
import { render, screen } from '@testing-library/react'

describe('SearchBar', () => {
  it('renders an input element', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText(/Suche Buch/i)).toBeInTheDocument()
  })
})
