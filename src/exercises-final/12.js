// Dynamic Forms
import React from 'react'

class UsernameForm extends React.Component {
  state = {error: this.props.getErrorMessage('')}
  inputRef = React.createRef()
  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmitUsername(this.inputRef.current.value)
  }
  handleChange = event => {
    const {value} = event.target
    this.setState({
      error: this.props.getErrorMessage(value),
    })
  }
  render() {
    const {error} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name-input">Username:</label>
        <input
          id="name-input"
          type="text"
          name="username"
          ref={this.inputRef}
          onChange={this.handleChange}
        />
        {error ? <div style={{color: 'red'}}>{error}</div> : null}
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    )
  }
}

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
