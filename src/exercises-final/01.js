// validate components with propTypes
import React from 'react'
import PropTypes from 'prop-types'

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}!
    </div>
  )
}
SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

function Usage() {
  return <SayHello firstName={true} />
}
Usage.title = 'PropTypes'

export default Usage
