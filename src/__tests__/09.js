import React from 'react'
import {render, fireEvent} from '../../test/utils'
import Usage from '../exercises-final/09'
// import Usage from '../exercises/09'

test('keeps things in sync', () => {
  const {container} = render(<Usage />)
  const input = container.querySelector('input')
  const textarea = container.querySelector('textarea')
  const select = container.querySelector('select')

  let currentValue = ['apple', 'grape', 'orange']
  input.value = currentValue.join(',')
  fireEvent.change(input)
  valuesAreCorrect()

  // TODO...
  // currentValue = ['cherry', 'peach']
  // textarea.value = currentValue.join('\n')
  // fireEvent.change(textarea)
  // valuesAreCorrect()

  function valuesAreCorrect() {
    expect(input.value).toBe(currentValue.join(','))
    expect(textarea.value).toBe(currentValue.join('\n'))
    expect(Array.from(select.selectedOptions).map(o => o.value)).toEqual(
      currentValue,
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
http://ws.kcd.im/?ws=learn%20react&e=09&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
