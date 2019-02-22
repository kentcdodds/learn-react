// Controlled Form Fields
import React from 'react'

// here, we want to be able to update the state of the form
// fields based on changes to other fields. This uses a pattern
// called "controlled props" which is supported by all form
// fields in React.
//
// To control the value of (most) form fields, you simply pass
// a `value` prop to the element and it becomes controlled.
// From there on, React will cease to attempt to update the value
// itself as the user attempts to make changes to it. Instead,
// you are responsible for making sure that it's kept up to date.
//
// You can do this with the `onChange` prop. Whenever the user
// makes a change to the field value, react will call your change
// handler and you can use `event.target` to know what the new
// value should be.

const availableOptions = ['apple', 'grape', 'cherry', 'orange', 'pear', 'peach']
class MyFancyForm extends React.Component {
  // because React will not be able to update the state of the fields
  // we'll need to store that state ourselves.
  // 🐨 initialize state here for each of the fields:
  //   commaSeparated: '' (for the <input />)
  //   multiline: '' (for the <textarea />)
  //   multiSelect: [] (for the <select />)
  //
  // Now we need to add an event handler for each of the form fields.
  // The purpose of each event handler is to get the value from the
  // `event.target`, turn that value into an array, and pass that
  // array into `setStateForAllFields` along with an override for
  // the current field. As an example, I'll give you one of the
  // handlers.
  handleCommaSeparatedChange = event => {
    const {value} = event.target
    const allVals = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean)
    this.setStateForAllFields(allVals, {commaSeparated: value})
  }
  // 🐨 add handleMultilineChange for the <textarea />
  // 💰 you'll get the value from `event.target.value`
  // and you'll need to split it by newlines (\n)
  //
  // 🐨 add handleMultiSelectChange for the <select />
  // 💰 you'll get the value from `event.target.selectedOptions`
  // which is an HTMLCollection of <option /> elements.
  // You can turn this into an Array with `Array.from` and map
  // that to the option values with `.map(o => o.value)`

  setStateForAllFields(arrayOfItems, overrides) {
    // I'm leaving this for you because I love you.
    this.setState({
      commaSeparated: arrayOfItems.join(','),
      multiline: arrayOfItems.join('\n'),
      multiSelect: arrayOfItems.filter(v => availableOptions.includes(v)),
      ...overrides,
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>
            comma separated values:
            <br />
            <input
              // 🐨 add a value prop for the commaSeparated state
              // 🐨 also add an onChange for your `handleCommaSeparatedChange` handler
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            multiline values:
            <br />
            <textarea
              // 🐨 add a value prop for the multiline state
              // 🐨 also add an onChange for your `handleMultilineChange` handler
              rows={availableOptions.length}
            />
          </label>
        </div>
        <div>
          <label>
            multiSelect values:
            <br />
            <select
              // 🐨 add a value prop for the state of the multiSelect
              // 🐨 also add an onChange for your `handleMultiSelectChange` handler
              size={availableOptions.length}
              multiple
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

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return <MyFancyForm />
}
Usage.title = 'Controlled Form Fields'

export default Usage
