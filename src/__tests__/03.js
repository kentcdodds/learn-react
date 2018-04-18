import React from 'react'
import {render, Simulate} from '../../test/utils'
import Usage from '../exercises-final/03'
// import Usage from '../exercises/03'

test('calls the onButtonClick when the button is clicked', () => {
  const onButtonClick = jest.fn()
  const {container} = render(<Usage onButtonClick={onButtonClick} />)
  Simulate.click(container.querySelector('button'))
  expect(onButtonClick).toHaveBeenCalledTimes(1)
})

test('calls the onInputChange when the input is changed', () => {
  const onInputChange = jest.fn()
  const {container} = render(<Usage onInputChange={onInputChange} />)
  Simulate.change(container.querySelector('input'))
  expect(onInputChange).toHaveBeenCalledTimes(1)
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
