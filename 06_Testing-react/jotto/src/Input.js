import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Input = ({ secretWord }) => {
  // not destructure useState so can mock, use from default export of React
  const [currentGuess, setCurrentGuess] = React.useState('');
  const success = useSelector(state => state.success);

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          name="guess"
          className="mb-2 mx-sm-3 form-control"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={() => {
            // TODO: update guessedWords
            // TODO: check against secretWord and update success if needed
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
