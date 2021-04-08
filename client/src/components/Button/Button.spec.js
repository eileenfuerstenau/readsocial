import { screen, render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders a button with text', () => {
    render(<Button>Testbutton</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Testbutton')
  })
})
