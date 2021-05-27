import React from 'react';
import { shallow } from Enzyme;
import { findByTestAttr } from './testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = [{
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3}
  ]
}];

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @Function setup
 * @param {objec} props -Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />)
 }
