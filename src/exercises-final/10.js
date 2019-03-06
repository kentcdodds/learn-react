// Interact with the DOM
import React from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  const tiltNode = React.useRef()

  React.useEffect(() => {
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode.current, vanillaTiltOptions)
    return () => tiltNode.current.vanillaTilt.destroy()
  }, [])

  return (
    <div ref={tiltNode} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}

function Usage() {
  return (
    <div className="totally-centered">
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  )
}
Usage.title = 'Interact with the DOM'

export default Usage
