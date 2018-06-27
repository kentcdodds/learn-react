import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {
  render as renderUI,
  wait,
  fireEvent,
  cleanup,
} from 'react-testing-library'
import React from 'react'

// this only exists so we can search for an instance of the Switch
// and make some assertions to give more helpful error messages.
class Root extends React.Component {
  render() {
    return this.props.children
  }
}

function render(ui) {
  let rootInstance
  let rootRef = instance => (rootInstance = instance)
  const utils = renderUI(<Root ref={rootRef}>{ui}</Root>)
  return {
    rootInstance,
    ...utils,
  }
}

export {render, wait, fireEvent, cleanup}
