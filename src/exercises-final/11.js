// Basic Forms
import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.createRef()
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Username:</label>
      <input id="name-input" type="text" name="username" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.log('username', username)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
Usage.title = 'Basic Forms'

export default Usage
