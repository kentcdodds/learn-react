// More Practice with State
import React from 'react'

const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}
const labelStyles = {
  fontSize: '5em',
  display: 'block',
}

class StopWatch extends React.Component {
  initialState = {lapse: 0, running: false}
  state = this.initialState
  handleRunClick = () => {
    if (this.state.running) {
      clearInterval(this.intervalId)
    } else {
      const startTime = Date.now() - this.state.lapse
      this.intervalId = setInterval(() => {
        this.setState({
          lapse: Date.now() - startTime,
        })
      })
    }
    this.setState(state => ({running: !state.running}))
  }
  handleClearClick = () => {
    clearInterval(this.intervalId)
    this.setState(this.initialState)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  render() {
    const {lapse, running} = this.state
    return (
      <div>
        <label style={labelStyles}>{lapse}ms</label>
        <button onClick={this.handleRunClick} style={buttonStyles}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleClearClick} style={buttonStyles}>
          Clear
        </button>
      </div>
    )
  }
}

function Usage() {
  return (
    <div style={{textAlign: 'center'}}>
      <StopWatch />
    </div>
  )
}
Usage.title = 'More State'

export default Usage
