import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { callback, btnContent, className } = this.props;
    return (
      <>
        <button className={className} onClick={callback}>{btnContent}</button>
      </>
    );
  }
}

Button.protoTypes = {
  btnContent: PropTypes.string.isRequired,
  callback: PropTypes.func,
}
