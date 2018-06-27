// Rendering Arrays
import React from 'react'

const allItems = [
  {id: 'a', value: 'apple'},
  {id: 'o', value: 'orange'},
  {id: 'g', value: 'grape'},
  {id: 'p', value: 'pear'},
]
class App extends React.Component {
  state = {items: []}
  addItem = () => {
    this.setState(({items}) => ({
      items: [...items, allItems.find(i => !items.includes(i))],
    }))
  }
  removeItem = item => {
    this.setState(({items}) => ({
      items: items.filter(i => i !== item),
    }))
  }
  render() {
    const {items} = this.state
    return (
      <div>
        <button
          disabled={items.length >= allItems.length}
          onClick={this.addItem}
        >
          +
        </button>
        {items.map(i => (
          // 🐨 this div needs a key. Set it to i.id
          <div>
            <button onClick={() => this.removeItem(i)}>-</button>
            {i.value}:
            <input />
          </div>
        ))}
      </div>
    )
  }
}

function Usage() {
  return <App />
}
Usage.title = 'Rendering Arrays'

export default Usage
