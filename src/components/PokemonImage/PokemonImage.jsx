import React, { Component } from 'react'

export default class PokemonImage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.sprite} alt={this.props.name} />
      </div>
    )
  }
}
