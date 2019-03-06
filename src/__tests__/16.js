import React from 'react'
import chalk from 'chalk'
import {render, wait} from 'react-testing-library'
import Usage from '../exercises-final/16'
// import Usage from '../exercises/16'

const realError = console.error

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  jest
    .spyOn(window, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({json: () => Promise.resolve({data: {pokemon: {}}})}),
    )
})

afterAll(() => {
  window.fetch.mockRestore()
  console.error.mockRestore()
})

beforeEach(() => {
  window.fetch.mockClear()
  console.error.mockClear()
})

afterEach(() => {
  try {
    expect(console.error).toHaveBeenCalledTimes(3)
  } catch (_e) {
    const badCalls = console.error.mock.calls.filter(
      c => c[0] && c[0].includes('Warning'),
    )
    badCalls.forEach((...args) => {
      realError(...args)
    })
  }
})

test('displays the pokemon', async () => {
  window.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({data: {pokemon: {id: 'fake-id'}}}),
    }),
  )
  const {getByLabelText, getByText, getByTestId} = render(<Usage />)
  const input = getByLabelText(/pokemon/i)
  const submit = getByText(/submit/i)

  // verify that an initial request is made in componentDidMount
  input.value = 'jeffry'
  submit.click()
  await wait(() =>
    expect(getByTestId('pokemon-display')).toHaveTextContent('fake-id'),
  )
  expect(window.fetch).toHaveBeenCalledTimes(1)
  expect(window.fetch).toHaveBeenCalledWith('https://graphql-pokemon.now.sh', {
    method: 'POST',
    headers: {'content-type': 'application/json;charset=UTF-8'},
    // if this assertion fails, make sure that the pokemon name is being passed
    body: expect.stringMatching(/jeffry/),
  })
  window.fetch.mockClear()

  // verify that a request is made when props change
  window.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({data: {pokemon: {id: 'id-that-is-fake'}}}),
    }),
  )
  input.value = 'fred'
  submit.click()
  await wait(() =>
    expect(getByTestId('pokemon-display')).toHaveTextContent('id-that-is-fake'),
  )
  expect(window.fetch).toHaveBeenCalledTimes(1)
  expect(window.fetch).toHaveBeenCalledWith('https://graphql-pokemon.now.sh', {
    method: 'POST',
    headers: {'content-type': 'application/json;charset=UTF-8'},
    // if this assertion fails, make sure that the pokemon name is being passed
    body: expect.stringMatching(/fred/),
  })
  window.fetch.mockClear()

  // verify that when props remain the same a request is not made
  submit.click()
  try {
    expect(window.fetch).not.toHaveBeenCalled()
  } catch (error) {
    error.message = [
      chalk.red(
        `🚨  Make certain that in your componentDidUpdate, you check whether the previous props pokemon changed before making another request. 🚨`,
      ),
      error.message,
    ].join('\n')
    throw error
  }

  // verify that an error renders an error
  window.fetch.mockImplementationOnce(() =>
    Promise.reject({
      error: 'some fake error',
    }),
  )

  input.value = 'george'
  submit.click()
  await wait(() =>
    expect(getByTestId('pokemon-display')).toHaveTextContent(/error/i),
  )
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=16&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
