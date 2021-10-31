import React, { Component } from 'react';
import './loadSpinner.css';

export default class LoadSpinner extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
