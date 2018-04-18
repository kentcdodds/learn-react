import {render as renderUI, Simulate, wait} from 'react-testing-library'
import 'jest-dom/extend-expect'
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

export {render, Simulate, wait}
