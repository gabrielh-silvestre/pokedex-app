import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  render() {
    const { callback } = this.props;
    return (
      <div className="btn-container">
        <button onClick={callback}>{this.props.btnContent}</button>
      </div>
    );
  }
}
