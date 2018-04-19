// Dynamic Forms
import React from 'react'

// if we want our form to be dynamic, we'll need a few things:
// 1. Component state to store the dynamic values (an error message in our case)
// 2. A change handler on the input so we know what the value is as the user changes it
//
// In our usage example below, we provide a prop called `getErrorMessage`.
// This serves as our simple validation. If it returns a string, that's an error
// message we should display below the input. We'll store this value in state
// and use that to know whether to render the message as well as whether to
// disable the submit button.

class UsernameForm extends React.Component {
  // 🐨 add some state to this form for the error.
  // 💰 initialize it with an error property that's assigned to `this.props.getErrorMessage('')`
  state = {error: this.props.getErrorMessage('')}
  inputRef = React.createRef()
  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmitUsername(this.inputRef.current.value)
  }
  // 🐨 create a bound `handleChange` function that takes the
  // value of the input and updates the `error` state to
  // whatever is returned from `this.props.getErrorMessage`
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name-input">Username:</label>
        <input
          id="name-input"
          type="text"
          name="username"
          ref={this.inputRef}
          // 🐨 add your onChange handler here
          onChange={this.handleChange}
        />
        {/* 🐨 if there's an error, then render it in a div here */}
        {/* 🐨 add a disabled prop to this button that's set to true if there's an error */}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage({
  onSubmitUsername = username => console.log('username', username),
}) {
  return (
    <UsernameForm
      onSubmitUsername={onSubmitUsername}
      getErrorMessage={value => {
        if (value.length < 3) {
          return `Value must be at least 3 characters, but is only ${
            value.length
          }`
        }
        if (!value.includes('s')) {
          return `Value does not include "s" but it should!`
        }
        return null
      }}
    />
  )
}
Usage.title = 'Dynamic Forms'

export default Usage
