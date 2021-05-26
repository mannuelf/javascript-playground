import React from 'react';
/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if success) prop is false
 */
export default function Congrats({ success }) {
  if (success) {
    return <div data-test="component-congrats">
      <span data-test="congrats-message">Congratulations! you guessed the word!</span>
    </div>
  }
  return <div data-test="component-congrats"></div>
}
