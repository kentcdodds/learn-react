// Controlled Form Fields
import React from 'react'

const availableOptions = ['apple', 'grape', 'cherry', 'orange', 'pear', 'peach']
class MyFancyForm extends React.Component {
  state = {
    multiline: '',
    commaSeparated: '',
    multiSelect: [],
  }
  handleCommaSeparatedChange = event => {
    const {value} = event.target
    const allVals = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean)
    this.setStateForAllFields(allVals, {commaSeparated: value})
  }
  handleMultilineChange = event => {
    const {value} = event.target
    const allVals = value
      .split('\n')
      .map(v => v.trim())
      .filter(Boolean)
    this.setStateForAllFields(allVals, {multiline: value})
  }
  handleMultiSelectChange = event => {
    const allVals = Array.from(event.target.selectedOptions).map(o => o.value)
    this.setStateForAllFields(allVals)
  }
  setStateForAllFields(arrayOfItems, overrides) {
    this.setState({
      commaSeparated: arrayOfItems.join(','),
      multiline: arrayOfItems.join('\n'),
      multiSelect: arrayOfItems.filter(v => availableOptions.includes(v)),
      ...overrides,
    })
  }
  render() {
    const {commaSeparated, multiline, multiSelect} = this.state
    return (
      <form>
        <div>
          <label>
            comma separated values:
            <br />
            <input
              type="text"
              value={commaSeparated}
              onChange={this.handleCommaSeparatedChange}
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
              onChange={this.handleMultilineChange}
            />
          </label>
        </div>
        <div>
          <label>
            multiSelect values:
            <br />
            <select
              multiple
              value={multiSelect}
              size={availableOptions.length}
              onChange={this.handleMultiSelectChange}
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
}

function Usage() {
  return <MyFancyForm />
}
Usage.title = 'Controlled Form Fields'

export default Usage
