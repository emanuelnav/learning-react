import React from 'react';
import './index.css';

function Die({ value }) {
  return (
    <div>
      <i className={`fa-solid fa-dice-${value} dice`}></i>
    </div>
  )
}

export { Die }