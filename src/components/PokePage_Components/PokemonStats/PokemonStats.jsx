import React, { Component } from 'react'

export default class PokemonStats extends Component {
  render() {
    const { attack, spAttack, defense, spDefense, speed } = this.props;

    return (
      <section>
        <div>
          <div>
            <h3>Attack</h3>
            <p>{attack}</p>
          </div>
          <div>
            <h3>Defense</h3>
            <p>{defense}</p>
          </div>
        </div>

        <div>
          <div>
            <h3>Special-Attack</h3>
            <p>{spAttack}</p>
          </div>
          <div>
            <h3>Special-Defense</h3>
            <p>{spDefense}</p>
          </div>
        </div>

        <div>
          <div>
            <h3>Speed</h3>
            <p>{speed}</p>
          </div>
        </div>
      </section>
    )
  }
}
