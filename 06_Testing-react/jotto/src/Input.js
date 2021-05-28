import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  return (
    <input
      data-test="component-input"
      type="text"
      name="guess"
      id="guess"
      className="form-control"
    />
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
