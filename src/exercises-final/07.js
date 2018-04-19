// Basic Forms
import React from 'react'

class UsernameForm extends React.Component {
  inputRef = React.createRef()
  handleSubmit = event => {
    // the default submit event for forms results in a full page
    // reload (really annoying). So we prevent it here.
    event.preventDefault()

    // The event.target property refers to the element upon which
    // the event was fired (this is consistent with regular DOM APIs).
    //
    // So this will be the <form>
    // console.log({target: event.target})
    //
    // There are various ways to get the elements of a form:

    // Via their index:
    // console.log(event.target.elements[0])

    // Via the elements object by their name:
    // console.log(event.target.elements.username)

    // Via a ref:
    // console.log(this.inputRef.current)

    // we'll get it via the ref and we'll get the value
    this.props.onSubmitUsername(this.inputRef.current.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name-input">Username:</label>
        <input
          id="name-input"
          type="text"
          name="username"
          ref={this.inputRef}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function Usage({onSubmitUsername = name => console.log('name', name)}) {
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
Usage.title = 'Basic Forms'

export default Usage
