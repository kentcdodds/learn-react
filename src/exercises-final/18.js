// Graph: Lazy-loading with React.lazy
import React from 'react'

const Graph = React.lazy(() => import('../graph'))

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
function Usage() {
  const [showGraph, setShowGraph] = React.useState(false)
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={showGraph}
          onChange={e => setShowGraph(e.target.checked)}
        />
        {' show Graph'}
      </label>
      <div>
        <React.Suspense fallback="loading...">
          {showGraph ? (
            <div className="totally-centered">
              <Graph />
            </div>
          ) : null}
        </React.Suspense>
      </div>
    </div>
  )
}
Usage.title = 'Graph: Lazy-loading with React.lazy'

export default Usage
