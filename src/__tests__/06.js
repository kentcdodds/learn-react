import React from 'react'
import VanillaTiltMock from 'vanilla-tilt'
import {render} from '../../test/utils'
import Usage from '../exercises-final/06'
// import Usage from '../exercises/06'

jest.mock('vanilla-tilt', () => {
  return {
    init: jest.fn(),
  }
})

test('calls VanillaTilt.init with the root node', () => {
  const {container} = render(<Usage />)
  expect(VanillaTiltMock.init).toHaveBeenCalledTimes(1)
  expect(VanillaTiltMock.init).toHaveBeenCalledWith(
    container.querySelector('.tilt-root'),
    expect.any(Object),
  )
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
