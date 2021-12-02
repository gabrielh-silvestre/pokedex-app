import React from 'react';
import './loadSpinner.css';

export default function LoadSpinner() {
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
