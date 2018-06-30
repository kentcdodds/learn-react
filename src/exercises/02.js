// validate components with propTypes
import React from 'react'

// There are two primary ways to style react components
// 1. Inline styles with the `style` prop
// 2. Regular CSS with the `className` prop
//
// About the `style` prop:
//   In HTML you'd pass a string of CSS: <div style="margin-top: 20px; background-color: blue;"></div>
//   In React, you'll pass an object of CSS: <div style={{marginTop: 20, backgroundColor: 'blue'}} />
//
//   💰 note that in react the {{ and }} is actually a combination of a JSX expression and an
//   object expression. The same example above could be written like so:
//   const myStyles = {marginTop: 20, backgroundColor: 'blue'}
//   <div styles={myStyles} />
//
// About the `className` prop:
//   As we discussed earlier, in HTML, you apply a class name to
//   an element with the `class` attribute. In JSX, you use the
//   `className` prop.
//
// In this exercise we'll use both methods for styling react components.
//
// We have a few class names on this page:
// .box
// .box--large
// .box--medium
// .box--small
//
// 🐨 Your job is to apply the right className and style props to the divs below
// so the styles applied match the text content
//
// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the code above.
function Usage() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
Usage.title = 'PropTypes'

export default Usage
