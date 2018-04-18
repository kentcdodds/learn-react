// Class Components and simple state
import React from 'react'

class Counter extends React.Component {
  state = {count: 0}
  handleClick = () => {
    this.setState(({count}) => ({
      count: count + 1,
    }))
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>
  }
}

function Usage() {
  return <Counter />
}
Usage.title = 'Class Components and simple state'

export default Usage
