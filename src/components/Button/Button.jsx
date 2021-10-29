import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { callback, btnContent } = this.props;
    return (
      <div className="btn-container">
        <button onClick={callback}>{btnContent}</button>
      </div>
    );
  }
}

Button.protoTypes = {
  btnContent: PropTypes.string.isRequired,
  callback: PropTypes.func,
}
