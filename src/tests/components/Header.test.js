import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { create, act } from 'react-test-renderer'
import Header from '../../components/Header'

test('Should create Header component to match snapshot', () => {
    let header
    act(() => {
        header = create(<BrowserRouter><Header></Header></BrowserRouter>)
    })
    expect(header.toJSON()).toMatchSnapshot()
})
