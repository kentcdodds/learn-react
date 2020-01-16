import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Usage from '../exercises-final/17'
// import Usage from '../exercises/17'

test('logs only when the state is changed', () => {
  jest.spyOn(console, 'log').mockImplementation(() => {})
  render(<Usage />)
  expect(console.log.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    "rendered",
    "",
  ],
  Array [
    "rendered",
    "",
  ],
]
`)
  console.log.mockClear()
  fireEvent.change(screen.getByLabelText(/first name/i), {target: {value: 'a'}})
  const callCount = console.log.mock.calls.length
  if (callCount > 1) {
    throw new Error(
      `🚨  console.log was called ${callCount} times. It should have only been called once. Make sure to wrap the Upper component in React.memo so it's only re-rendered when it needs to be.`,
    )
  }
  expect(console.log.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    "rendered",
    "a",
  ],
]
`)
  console.log.mockClear()

  fireEvent.click(screen.getAllByText('0')[0])
  expect(console.log.mock.calls).toMatchInlineSnapshot(`
Array [
  Array [
    "rendered",
    "a",
  ],
]
`)

  console.log.mockRestore()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=17&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
