import React from 'react'
import chalk from 'chalk'
import {render, fireEvent, act} from 'react-testing-library'
import Usage from '../exercises-final/09'
// import Usage from '../exercises/09'

jest.useFakeTimers()

test('renders', () => {
  jest.spyOn(console, 'error')
  const {container, unmount, getByText} = render(<Usage />)
  fireEvent.click(getByText('Start'))
  const label = container.querySelector('label')
  act(() => jest.runOnlyPendingTimers())
  fireEvent.click(getByText('Stop'))
  try {
    // TODO: make this .toBeGreaterThanOrEqual(1)
    // Right now it's failing because JavaScript is very fast...
    expect(parseInt(label.textContent, 10)).toBeGreaterThanOrEqual(0)
  } catch (error) {
    error.message = [
      chalk.red(
        `🚨  The stopwatch time is not being incremented or we can't find it. Make sure the time lapsed is in a <label> and ensure that state is set properly. 🚨`,
      ),
      error.message,
    ].join('\n')
    throw error
  }
  fireEvent.click(getByText('Clear'))
  expect(parseInt(label.textContent, 10)).toBe(0)

  fireEvent.click(getByText('Start'))
  act(() => jest.runOnlyPendingTimers())
  fireEvent.click(getByText('Clear'))
  expect(parseInt(label.textContent, 10)).toBe(0)

  fireEvent.click(getByText('Start'))
  act(() => {
    unmount()
  })
  act(() => jest.runOnlyPendingTimers())
  try {
    expect(console.error).toHaveBeenCalledTimes(0)
  } catch (error) {
    if (console.error.mock.calls[0][0].includes('unmounted component')) {
      error.message = [
        chalk.red(
          `🚨  It appears that when the component is mounted it doesn't clear the interval, so it keeps trying to call setState on an unmounted component. This could lead to a memory leak. Make sure to use componentWillUnmount to clear the interval 🚨`,
        ),
        error.message,
      ].join('\n')
    }
    throw error
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
