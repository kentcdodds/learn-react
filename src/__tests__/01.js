import React from 'react'
import {render} from '@testing-library/react'
import Usage from '../exercises-final/01'
// import Usage from '../exercises/01'

test('logs errors to the console', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  render(<Usage />)
  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'Warning: Failed prop type: Invalid prop `firstName` of type `boolean` supplied to `SayHello`, expected `string`.',
    ),
  )
  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'Warning: Failed prop type: The prop `lastName` is marked as required in `SayHello`, but its value is `undefined`.',
    ),
  )
  expect(console.error).toHaveBeenCalledTimes(2)
  console.error.mockRestore()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=01&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
