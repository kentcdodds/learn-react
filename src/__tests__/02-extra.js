import React from 'react'
import {render} from 'react-testing-library'
import Usage from '../exercises-final/02-extra'
// import Usage from '../exercises/02-extra'

test('renders the correct styles', () => {
  const {container} = render(<Usage />)
  expect(container).toMatchSnapshot()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=02&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
