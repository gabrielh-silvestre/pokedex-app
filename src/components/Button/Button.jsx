import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { increasePokemons } = this.props;
    return (
      <div>
        <button onClick={increasePokemons}>{this.props.btnContent}</button>
      </div>
    );
  }
}
