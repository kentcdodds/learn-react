// Controlled Form Fields
import React from 'react'

const availableOptions = ['apple', 'grape', 'cherry', 'orange', 'pear', 'peach']

function getStateFromArray(array) {
  return {
    commaSeparated: array.join(','),
    multiline: array.join('\n'),
    multiSelect: array.filter(v => availableOptions.includes(v)),
  }
}

function fancyFormReducer(state, action) {
  switch (action.type) {
    case 'COMMA_SEPARATED': {
      const allVals = action.value.split(',')
      return getStateFromArray(allVals)
    }
    case 'MULTILINE': {
      const allVals = action.value.split('\n')
      return getStateFromArray(allVals)
    }
    case 'MULTISELECT': {
      const allVals = Array.from(action.selectedOptions).map(o => o.value)
      return getStateFromArray(allVals)
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function MyFancyForm() {
  const [state, dispatch] = React.useReducer(fancyFormReducer, {
    multiline: '',
    commaSeparated: '',
    multiSelect: [],
  })
  const {multiline, commaSeparated, multiSelect} = state

  return (
    <form>
      <div>
        <label>
          comma separated values:
          <br />
          <input
            type="text"
            value={commaSeparated}
            onChange={event =>
              dispatch({type: 'COMMA_SEPARATED', value: event.target.value})
            }
          />
        </label>
      </div>
      <div>
        <label>
          multiline values:
          <br />
          <textarea
            value={multiline}
            rows={availableOptions.length}
            onChange={event =>
              dispatch({type: 'MULTILINE', value: event.target.value})
            }
          />
        </label>
      </div>
      <div>
        <label>
          multiselect values:
          <br />
          <select
            multiple
            value={multiSelect}
            size={availableOptions.length}
            onChange={event =>
              dispatch({
                type: 'MULTISELECT',
                selectedOptions: event.target.selectedOptions,
              })
            }
          >
            {availableOptions.map(optionValue => (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  )
}

function Usage() {
  return <MyFancyForm />
}
Usage.title = 'Controlled Form Fields'

export default Usage
