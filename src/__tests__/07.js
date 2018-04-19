import React from 'react'
import {renderIntoDocument, cleanup, fireEvent} from '../../test/utils'
import Usage from '../exercises-final/07'
// import Usage from '../exercises/07'

afterEach(cleanup)

test('calls the onSubmitUsername handler when the submit is fired', () => {
  const originalError = console.error
  console.error = (...args) => {
    // get rid of the distracting jsdom error
    if (args[0] && args[0].includes('Not implemented')) {
      return
    }
    originalError(...args)
  }
  const handleSubmitUsername = jest.fn()
  const {getByLabelText, getByText} = renderIntoDocument(
    <Usage onSubmitUsername={handleSubmitUsername} />,
  )
  const input = getByLabelText('username')
  const submit = getByText('submit')

  input.value = 'Jenny'
  fireEvent.click(submit)

  expect(handleSubmitUsername).toHaveBeenCalledTimes(1)
  expect(handleSubmitUsername).toHaveBeenCalledWith(input.value)
  console.error = originalError
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=07&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
