import React from 'react'
import {render, fireEvent} from '../../test/utils'
import Usage from '../exercises-final/03'
// import Usage from '../exercises/03'

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {})
})

beforeEach(() => {
  console.log.mockClear()
})

test('calls the onButtonClick when the button is clicked', () => {
  const {container} = render(<Usage />)
  fireEvent.click(container.querySelector('button'))
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith('you clicked the button!')
})

test('calls the onInputChange when the input is changed', () => {
  const {container} = render(<Usage />)
  fireEvent.change(container.querySelector('input'), {target: {value: 'a'}})
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith('the input value is: ', 'a')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=03&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
