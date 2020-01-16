import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/13'
// import Usage from '../exercises/13'

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {})
})

beforeEach(() => {
  console.log.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', () => {
  const {getByLabelText, getByText} = render(<Usage />)
  const input = getByLabelText(/username/i)
  const submit = getByText(/submit/i)

  let value = 'a'
  fireEvent.change(input, {target: {value}})
  expect(submit).toBeDisabled() // too short
  expect(getByText(/at least 3 characters/i)).toBeInTheDocument()

  value = 'abcd'
  fireEvent.change(input, {target: {value}})
  expect(submit).toBeDisabled() // missing s
  expect(getByText(/Value.*"s".*should/)).toBeInTheDocument()

  value = 'Samwise'
  fireEvent.change(input, {target: {value}})
  fireEvent.click(submit)

  expect(console.log).toHaveBeenCalledWith('username', input.value)
  expect(console.log).toHaveBeenCalledTimes(1)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=13&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
