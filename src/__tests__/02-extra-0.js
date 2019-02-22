import React from 'react'
import ReactDOMServer from 'react-dom/server.browser'
import prettyFormat from 'pretty-format'
import Usage from '../exercises-final/02-extra-0'
// import Usage from '../exercises/02-extra-0'

const {DOMElement, DOMCollection} = prettyFormat.plugins

expect.addSnapshotSerializer({
  test: val => typeof val === 'string',
  print: val => val,
})

test('renders the correct styles', () => {
  // we're doing this renderToStaticMarkup business because
  // for some reason rendering it like normally doesn't give
  // us the style props correctly.
  const html = ReactDOMServer.renderToStaticMarkup(<Usage />)
  const div = document.createElement('div')
  div.innerHTML = html

  const formattedHTML = prettyFormat(div.firstChild, {
    plugins: [DOMElement, DOMCollection],
  })
  expect(formattedHTML).toMatchSnapshot()
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=02-extra-0&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
