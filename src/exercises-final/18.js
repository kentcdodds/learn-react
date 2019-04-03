// Graph: Lazy-loading with React.lazy
import React from 'react'

const Graph = React.lazy(() => import('../graph'))

function GraphShower() {
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

function Usage() {
  return <GraphShower />
}
Usage.title = 'Graph: Lazy-loading with React.lazy'

export default Usage
