import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders a header with the title given to it', () => {
    render(<Header>Lass dich inspirieren</Header>)
    expect(screen.getByRole('banner').innerHTML).toBe('Lass dich inspirieren')
  })
})
