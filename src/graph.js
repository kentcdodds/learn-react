import React from 'react'
import * as d3 from 'd3'

function Graph() {
  const myDiv = React.useRef()
  React.useEffect(() => {
    makeGraph(myDiv.current)
  })
  return <div ref={myDiv} />
}

const data = [
  {salesperson: 'Bob', sales: 33},
  {salesperson: 'Robin', sales: 12},
  {salesperson: 'Anne', sales: 41},
  {salesperson: 'Mark', sales: 16},
  {salesperson: 'Joe', sales: 59},
  {salesperson: 'Eve', sales: 38},
  {salesperson: 'Karen', sales: 21},
  {salesperson: 'Kirsty', sales: 25},
  {salesperson: 'Chris', sales: 30},
  {salesperson: 'Lisa', sales: 47},
  {salesperson: 'Tom', sales: 5},
  {salesperson: 'Stacy', sales: 20},
  {salesperson: 'Charles', sales: 13},
  {salesperson: 'Mary', sales: 29},
]

// borrowed from https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4
function makeGraph(target) {
  const margin = {top: 20, right: 20, bottom: 30, left: 40}
  const width = 960 - margin.left - margin.right
  const height = 500 - margin.top - margin.bottom

  // set the ranges
  const x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.1)
  const y = d3.scaleLinear().range([height, 0])

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  const svg = d3
    .select(target)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // format the data
  data.forEach(function(d) {
    d.sales = +d.sales
  })

  // Scale the range of the data in the domains
  x.domain(
    data.map(function(d) {
      return d.salesperson
    }),
  )
  y.domain([
    0,
    d3.max(data, function(d) {
      return d.sales
    }),
  ])

  // append the rectangles for the bar chart
  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function(d) {
      return x(d.salesperson)
    })
    .attr('width', x.bandwidth())
    .attr('y', function(d) {
      return y(d.sales)
    })
    .attr('height', function(d) {
      return height - y(d.sales)
    })

  // add the x Axis
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))

  // add the y Axis
  svg.append('g').call(d3.axisLeft(y))
}

export default Graph
