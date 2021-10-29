import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { callback, btnContent } = this.props;
    return (
      <>
        <button className="py-2 px-4 text-lg bg-red-600 text-gray-100 font-bold rounded-md" onClick={callback}>{btnContent}</button>
      </>
    );
  }
}

Button.protoTypes = {
  btnContent: PropTypes.string.isRequired,
  callback: PropTypes.func,
}
