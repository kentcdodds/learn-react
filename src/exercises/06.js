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
// const myDiv = React.createRef()
// const ui = <div ref={myDiv}>hi</div>
// ReactDOM.render(ui, document.getElementById('root'))
//
// console.log(myDiv.current) // <-- myDiv.current is the div DOM node!
//
// Normally when you use this in a react class, you'll make the
// ref (`myDiv`) an instance property of the class (similar to what we
// do with `state`).
//
// After the component has been rendered, it's considered "mounted." By
// this point, the ref should have its `current` property set to the
// DOM node. So often you'll do direct DOM interactions/manipulations
// in the `componentDidMount` lifecycle hook.

class Tilt extends React.Component {
  // 🐨 create a ref here as an instance property
  // 💰 rootNode = ...

  // 🐨 add a `componentDidMount` lifecycle hook (class method) here.
  // and use VanillaTilt to make your div do cool stuff.
  // 💰 like this:
  // VanillaTilt.init(yourDOMNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  render() {
    // 🐨 add a `ref` prop to the root `div` here and assign it to the
    // `ref` you created on your instance.
    return (
      <div className="tilt-root">
        <div className="tilt-child">{this.props.children}</div>
      </div>
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
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
