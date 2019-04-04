// Interact with the DOM
import React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

// Often when working with React you'll need to integrate with UI libraries.
// Some of these need to work directly with the DOM. Remember that when you
// do: <div>hi</div> that's actually syntactic sugar for a React.createElement
// so you don't actually have access to DOM nodes in your render method.
// In fact, DOM nodes aren't created at all until the ReactDOM.render method
// is called. Your component's render method is really just responsible with
// creating and returning React Elements and has nothing to do with the DOM
// in particular.
//
// So to get access to the DOM, you need to ask React to give you access to
// a particular DOM node when it renders your component. The way this happens
// is through a special prop called `ref`.
//
// Here's a simple example of using the `ref` prop:
//
// function MyDiv() {
//   const myDivRef = React.useRef()
//   React.useEffect(() => {
//     const myDivNode = myDivRef.current // <-- myDivRef.current is the div DOM node!
//   }, [])
//   return <div ref={myDivRef}>hi</div>
// }
// ReactDOM.render(<MyDiv />, document.getElementById('root'))
//
// After the component has been rendered, it's considered "mounted." That's when
// the React.useEffect callback is called and so by that point, the ref should
// have its `current` property set to the DOM node. So often you'll do direct
// DOM interactions/manipulations in the `useEffect` callback.

function Tilt(props) {
  // 🐨 create a ref here with React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup: `tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'Interact with the DOM'

export default Usage
