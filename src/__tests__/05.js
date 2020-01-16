import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/05'
// import Usage from '../exercises/05'

test('clicking the button increments the count', () => {
  const {container} = render(<Usage />)
  const button = container.querySelector('button')
  fireEvent.click(button)
  expect(button).toHaveTextContent('1')
})

// this test is using some serious witchcraft 🧙‍♀️
// don't write tests like this please.
// I'm just making sure that you're using a custom hook called useCounter
// but your apps should not have tests like this.
// That's an implementation detail... Read more: https://kcd.im/imp-deets
test('using a custom hook called useCounter', () => {
  const createElement = React.createElement
  let counterFn
  React.createElement = (...args) => {
    if (args[0] && args[0].name === 'Counter') {
      counterFn = args[0]
    }
    return createElement(...args)
  }
  render(<Usage />)
  React.createElement = createElement
  try {
    expect(counterFn.toString()).toContain('useCounter')
  } catch (error) {
    throw new Error(
      '🚨  The Counter component that is rendered must call a hook called "useCounter" to get the "count" and "increment" functions.',
    )
  }
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=05&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
