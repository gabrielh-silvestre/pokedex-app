import React, { Component } from 'react'

export default class PokemonImage extends Component {
  render() {
    return (
      <>
        <img src={this.props.sprite} alt={this.props.name} />
      </>
    )
  }
}
