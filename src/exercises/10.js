// Tic Tac Toe: useReducer
import React from 'react'

// Here's the game that supports history. We've moved the <Board /> to a simple
// UI-only component (sometimes referred to as a "presentational component").
// The <Game /> component holds all the logic for our app. We're using two
// useState hooks for managing our state. Most of the logic for updating our
// state lives in the `selectSquare` function. Let's extract that logic into
// a pure function and use React's useReducer function.
// Here's an example of how you might use the useReducer hook for our old
// counter example component:
//
// function counterReducer(state, action) {
//   switch (action.key) {
//     case 'INCREMENT': {
//       return {count: state.count + 1}
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }
// function Counter() {
//   const [state, dispatch] = React.useReducer(counterReducer, {count: 0})
//   const {count} = state
//   const increment = () => dispatch({type: 'INCREMENT'})
//   return <button onClick={increment}>{count}</button>
// }
//
// 🦉 our counterReducer _could_ be inlined as a function within the Counter
//    component itself and there's nothing wrong with this. It could be
//    useful if you wanted to make the reducer take props into account for
//    example. But I personally prefer to extract it. There's not really a
//    significant benefit either way...
//
// 🦉 our counterReducer is using a switch statement and this is pretty
//    typical of reducers, but it does not have to use a switch statement.
//    You can do whatever you like to there. What matters is that it gets
//    passed the state and an argument passed by dispatch. We're calling that
//    argument "action" but you could call it whatever you want and it
//    doesn't even have to have a "type" property if you don't want.
//    All that said, this is a pretty typical example of a reducer.
//
// 🦉 The idea behind the reducer is that it handles most of the logic for your
//    component and your component simply invokes dispatch with all the data
//    that the reducer needs to do it's job.
//
// With that example, I'd like you to take all the state in Game and put it into
// a single React.useReduce(reducer, initialState) hook.

function Board({squares, onClick}) {
  const renderSquare = i => (
    <button className="square" onClick={() => onClick(i)}>
      {squares[i]}
    </button>
  )

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {
  // 🐨 Take the next two lines and replace them with a single React.useReducer call
  const [history, setHistory] = React.useState([{squares: Array(9).fill(null)}])
  const [stepNumber, setStepNumber] = React.useState(0)

  // this is "derived state" (in our original example of this, we actually
  // stored it in state, but now we can derive that because we're storing the
  // step number) meaning that it's state you can calculate based on other
  // state. 💰 You'll need to make this same calculation in the reducer as well
  // as here.
  const xIsNext = stepNumber % 2 === 0

  // 🦉 one of the benefits of a reducer is that it allows you to extract a
  // bunch of component logic from within the component to the reducer. This
  // means that your components are a bit simpler and logic is all in the same
  // place resulting in an easier maintenance situation for you :)

  // the selectSquare function's entire purpose is to perform calculations to
  // determine what state changes should happen (if any). That's precicely what
  // the reducer is responsible for!
  // 🐨 let's move this logic to your reducer and instead call dispatch and let
  // dispatch handle this to determine the next state.
  function selectSquare(square) {
    const newHistory = history.slice(0, stepNumber + 1)
    const current = newHistory[newHistory.length - 1]
    const squares = [...current.squares]

    if (calculateWinner(squares) || squares[square]) {
      return
    }

    squares[square] = xIsNext ? 'X' : 'O'
    setHistory([...newHistory, {squares}])
    setStepNumber(newHistory.length)
  }

  // If you've made it this far and the tests are still passing and the app
  // still works then you're done! 🎉 Don't forget the 💯 below!

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (current.squares.every(Boolean)) {
    status = `Scratch: Cat's game`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const moves = history.map((step, stepNumber) => {
    const desc = stepNumber ? `Go to move #${stepNumber}` : 'Go to game start'
    return (
      <li key={stepNumber}>
        <button onClick={() => setStepNumber(stepNumber)}>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={current.squares} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

// 💯 That history functionality is pretty cool! Why don't you try to make a
//    reusable version of that hook? You could call it `useHistory` or something
//    and it could expose the following data/functions: history, entryNumber,
//    current, goToEntry, and addEntry. Then you can use that instead. You'll
//    need to move some of the logic around to make it generic enough to be
//    useful, but it's pretty neat.
// 💯 Once you've got `useHistory`, you might consider making a `useGame` custom
//    hook that handles all the logic for our component. Just for fun. It would
//    use the `useHistory` hook and it could expose the following
//    data/functions: history, squares, selectSquare, goToStep, status
//    When you're done, your component will simply use `useGame` and return some
//    JSX elements. Cool right!?

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Usage() {
  return <Game />
}
Usage.title = 'Tic Tac Toe: useReducer'

export default Usage
