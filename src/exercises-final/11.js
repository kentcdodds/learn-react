// Interact with the DOM
import React from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
  const tiltRef = React.useRef()

  React.useEffect(() => {
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltRef.current, vanillaTiltOptions)
    return () => tiltRef.current.vanillaTilt.destroy()
  }, [tiltRef.current])

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'Interact with the DOM'

export default Usage
