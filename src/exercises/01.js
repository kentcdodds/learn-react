// validate components with propTypes
import React from 'react'
import PropTypes from 'prop-types'

// you'll notice that the Usage below is attempting to create
// a SayHello react element but is not passing a lastName
// and it's passing a boolean for the firstName but it should
// be passing a string for both! Let's validate these so
// people get a nice warning in their console when they do this.

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}!
    </div>
  )
}
// 🐨 Add a property called `propTypes` to the SayHello function
// which is an object that has a key for each prop we want to
// validate and is assigned to the type from PropTypes.
//
// 💰 to find out what's available, try this:
// console.log(PropTypes)


// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return <SayHello firstName={true} />
}
Usage.title = 'PropTypes'

export default Usage
