import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ callback, btnContent, className }) {
  return (
    <button className={className} onClick={callback}>
      {btnContent}
    </button>
  );
}

Button.protoTypes = {
  className: PropTypes.string.isRequired,
  btnContent: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
