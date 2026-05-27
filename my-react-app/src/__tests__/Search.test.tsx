import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'
import Search from '../components/search'

test('инпут отрисовался на стринице', () => {
    render(<Search onSearch={() => {}}/>) 

    const placeholder = screen.getByPlaceholderText(/search/i)

    expect(placeholder).toBeInTheDocument()
})

