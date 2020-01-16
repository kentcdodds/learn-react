import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/06'
// import Usage from '../exercises/06'

afterEach(() => {
  window.localStorage.removeItem('count')
})

test('Usage works', () => {
  window.localStorage.setItem('count', 3)
  const {container} = render(<Usage />)
  const button = container.getElementsByTagName('button')[0]
  expect(button).toHaveTextContent(/3/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/4/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/5/)
  expect(window.localStorage.getItem('count')).toBe('5')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=06&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
