// Event handlers
import React from 'react'

function App({onButtonClick, onInputChange}) {
  return (
    <div>
      <button onClick={onButtonClick}>Click me!</button>
      <input onChange={onInputChange} />
    </div>
  )
}

function Usage({
  onButtonClick = () => console.log('you clicked the button!'),
  onInputChange = event =>
    console.log('the input value is: ', event.target.value),
}) {
  return <App onButtonClick={onButtonClick} onInputChange={onInputChange} />
}
Usage.title = 'Event handlers'

export default Usage
