import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders a header with the title given to it', () => {
    render(<Header title="Lass dich inspirieren" />)
    expect(screen.getByRole('heading').innerHTML).toBe('Lass dich inspirieren')
  })
})
