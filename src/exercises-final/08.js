// Counter: advanced custom hooks
import React from 'react'

function useLocalStorageState({
  key,
  initialValue,
  serialize = v => v,
  deserialize = v => v,
}) {
  const [state, setState] = React.useState(
    () => deserialize(window.localStorage.getItem(key)) || initialValue,
  )

  const serializedState = serialize(state)
  React.useEffect(() => {
    window.localStorage.setItem(key, serializedState)
  }, [key, serialize, serializedState])

  return [state, setState]
}

function useLocalStorageCounter({step = 1, initialCount = 0, key = 'count'}) {
  const [count, setCount] = useLocalStorageState({
    key,
    initialValue: initialCount,
    deserialize: v => Number(v),
  })
  const increment = () => setCount(c => c + step)
  return [count, increment]
}

function Counter({step, initialCount}) {
  const [count, increment] = useLocalStorageCounter({
    step,
    initialCount,
  })
  return <button onClick={increment}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: advanced custom hooks'

export default Usage
