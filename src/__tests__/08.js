import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Usage from '../exercises-final/08'
// import Usage from '../exercises/08'

beforeAll(() => {
  jest.spyOn(Storage.prototype, 'getItem')
})

beforeEach(() => {
  Storage.prototype.getItem.mockClear()
})

afterEach(() => {
  window.localStorage.removeItem('count')
})

test('Usage works', () => {
  window.localStorage.setItem('count', 3)
  const {container} = render(<Usage />)
  const button = container.getElementsByTagName('button')[0]
  expect(button).toHaveTextContent(/3/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/4/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/5/)
  // make sure that localStorage.getItem is only called once despite multiple re-renders
  expect(Storage.prototype.getItem).toHaveBeenCalledTimes(1)
  expect(window.localStorage.getItem('count')).toBe('5')
})

// this test is using some serious witchcraft 🧙‍♀️
// don't write tests like this please.
// I'm just making sure that you're using a custom hook called
// useLocalStorageCounter but your apps should not have tests like this.
// That's an implementation detail... Read more: https://kcd.im/imp-deets
test('using a custom hook called useLocalStorageCounter or useLocalStorageState', () => {
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
    expect(counterFn.toString()).toMatch(
      /useLocalStorageCounter|useLocalStorageState/,
    )
  } catch (error) {
    throw new Error(
      '🚨  The Counter component that is rendered must call a hook called "useLocalStorageCounter" or "useLocalStorageState"',
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
http://ws.kcd.im/?ws=learn%20react&e=08&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
