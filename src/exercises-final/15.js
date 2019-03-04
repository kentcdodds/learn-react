// Making HTTP requests
import React from 'react'

class FetchPokemon extends React.Component {
  state = {pokemon: null, loading: false}
  fetchPokemon = () => {
    this.setState({loading: true})
    fetchPokemon(this.props.pokemonName).then(
      pokemon => this.setState({pokemon, loading: false}),
      error => this.setState({error, loading: false}),
    )
  }
  componentDidMount() {
    this.fetchPokemon()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.fetchPokemon()
    }
  }
  render() {
    return this.state.loading ? (
      '...'
    ) : this.state.error ? (
      'ERROR (check your developer tools network tab)'
    ) : (
      <pre>{JSON.stringify(this.state.pokemon || 'Unknown', null, 2)}</pre>
    )
  }
}

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
