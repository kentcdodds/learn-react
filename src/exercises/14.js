// Making HTTP requests
import React from 'react'

// In this exercise we have a form where users can enter the name of a pokemon
// and fetch data about that pokemon. Your job will be to create a component
// which makes that fetch request.
//
// 🐨 Have state for the pokemon and the loading state
// 🐨 Use the `fetchPokemon` function below to fetch a pokemon by its name:
//   fetchPokemon('Pikachu').then(
//     pokemon => { /* call set state with the pokemon and loading: false */},
//     error => {/* call set state with the error loading: false */},
//   )
// 🐨 You should fetch the pokemon in componentDidMount and componentDidUpdate
//    (but only if the props changed: `componentDidMount(prevProps)`)
// 🐨 Before you fetch the pokemon, call `this.setState({loading: true})` to
//   initialize the loading state (ask me later how this will be different in
//   the future with React "suspense")
// 🐨 Render the appropriate content based on the state:
//    1. loading: '...'
//    2. error: 'ERROR!'
//    3. pokemon: the JSON.stringified pokemon in a <pre></pre>

class FetchPokemon extends React.Component {
  render() {
    return 'todo...'
  }
}

/////////////////////////////////////////////////
//
// You should not need to change anything below this line
//
/////////////////////////////////////////////////

function fetchPokemon(name) {
  const pokemonQuery = `
    query ($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

  return window
    .fetch('https://graphql-pokemon.now.sh', {
      // learn more about this API here: https://graphql-pokemon.now.sh/
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: {name},
      }),
    })
    .then(r => r.json())
    .then(response => response.data.pokemon)
}

class Usage extends React.Component {
  state = {pokemonName: null}
  inputRef = React.createRef()
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      pokemonName: this.inputRef.current.value,
    })
  }
  render() {
    const {pokemonName} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
          <input id="pokemonName-input" ref={this.inputRef} />
          <button type="submit">Submit</button>
        </form>
        <div data-testid="pokemon-display">
          {pokemonName ? <FetchPokemon pokemonName={pokemonName} /> : null}
        </div>
      </div>
    )
  }
}
Usage.title = 'Making HTTP requests'

export default Usage

/* eslint no-unused-vars:0 */
