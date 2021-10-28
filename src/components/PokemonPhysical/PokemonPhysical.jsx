import React, { Component } from 'react'

export default class PokemonPhysical extends Component {
  render() {
    const { height, weight, ability } = this.props;

    return (
      <section>
        <div>
          <h3>Height</h3>
          <p>{height} m</p>
        </div>

        <div>
          <h3>Weight</h3>
          <p>{(weight / 10).toFixed(1)} Kg</p>
        </div>

        <div>
          <h3>Ability</h3>
          <p>{ability}</p>
        </div>
      </section>
    )
  }
}
