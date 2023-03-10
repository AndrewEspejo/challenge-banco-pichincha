import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('fires onClick callback when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={ onClick }>Click me</Button>)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })
})
