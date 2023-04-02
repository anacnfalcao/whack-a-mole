import { render, screen } from '@testing-library/react'
import Text from './index'

describe('Text', () => {
  it('renders the expected label', () => {
    const { container } = render(<Text label='label' />)

    const text = screen.getByText('label')

    expect(text).toBeInTheDocument()

  })
})