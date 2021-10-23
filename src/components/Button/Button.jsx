import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  render() {
    const { increasePokemons } = this.props;
    return (
      <div className="btn-container">
        <button onClick={increasePokemons}>{this.props.btnContent}</button>
      </div>
    );
  }
}
