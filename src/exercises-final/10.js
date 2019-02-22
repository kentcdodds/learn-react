// Basic Forms
import React from 'react'

class UsernameForm extends React.Component {
  inputRef = React.createRef()
  handleSubmit = event => {
    event.preventDefault()
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

function Usage({
  onSubmitUsername = username => console.log('username', username),
}) {
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
Usage.title = 'Basic Forms'

export default Usage
