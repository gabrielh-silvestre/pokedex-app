import React, { Component } from 'react'

export default class PokemonPhysical extends Component {
  render() {
    const { height, weight, ability } = this.props;

    return (
      <div>
        <div>
          <p>Height</p>
          <p>{height}</p>
        </div>

        <div>
          <p>Weight</p>
          <p>{weight}</p>
        </div>

        <div>
          <p>Ability</p>
          <p>{ability}</p>
        </div>
      </div>
    )
  }
}
