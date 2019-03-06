// Tic Tac Toe: Advanced State
import React from 'react'

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

function gameReducer(state, action) {
  const {history, stepNumber} = state
  switch (action.type) {
    case 'SELECT_SQUARE': {
      const xIsNext = stepNumber % 2 === 0
      const newHistory = history.slice(0, stepNumber + 1)
      const current = newHistory[newHistory.length - 1]
      const squares = [...current.squares]

      if (calculateWinner(squares) || squares[action.square]) {
        return state
      }

      squares[action.square] = xIsNext ? 'X' : 'O'
      return {
        history: [...newHistory, {squares}],
        stepNumber: newHistory.length,
      }
    }
    case 'GO_TO_MOVE': {
      return {
        ...state,
        stepNumber: action.move,
      }
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function Game() {
  const [state, dispatch] = React.useReducer(gameReducer, {
    history: [{squares: Array(9).fill(null)}],
    stepNumber: 0,
  })
  const {history, stepNumber} = state
  const xIsNext = stepNumber % 2 === 0

  function selectSquare(square) {
    dispatch({type: 'SELECT_SQUARE', square})
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else if (current.squares.every(Boolean)) {
    status = `Scratch: Cat's game`
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => dispatch({type: 'GO_TO_MOVE', move})}>
          {desc}
        </button>
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
Usage.title = 'Tic Tac Toe: Advanced State'

export default Usage
