// Stopwatch: Advanced State
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

function stopwatchReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_RUNNING': {
      return {...state, running: !state.running}
    }
    case 'INCREMENT_LAPSE': {
      if (state.running) {
        return {
          ...state,
          lapse: action.now - action.startTime,
        }
      } else {
        return state
      }
    }
    case 'CLEAR': {
      return {lapse: 0, running: false}
    }
    default: {
      throw new Error(`Unsupported type ${action.type}`)
    }
  }
}

function Stopwatch() {
  const [{lapse, running}, dispatch] = React.useReducer(stopwatchReducer, {
    lapse: 0,
    running: false,
  })

  React.useEffect(() => {
    if (running) {
      const startTime = Date.now() - lapse
      const rafId = requestAnimationFrame(() => {
        dispatch({type: 'INCREMENT_LAPSE', now: Date.now(), startTime})
      })
      return () => cancelAnimationFrame(rafId)
    }
  }, [running, lapse])

  function handleRunClick() {
    dispatch({type: 'TOGGLE_RUNNING'})
  }

  function handleClearClick() {
    dispatch({type: 'CLEAR'})
  }

  return (
    <div>
      <label style={labelStyles}>{lapse}ms</label>
      <button onClick={handleRunClick} style={buttonStyles}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick} style={buttonStyles}>
        Clear
      </button>
    </div>
  )
}

function Usage() {
  return (
    <div style={{textAlign: 'center'}}>
      <Stopwatch />
    </div>
  )
}
Usage.title = 'Stopwatch: advanced state'

export default Usage
