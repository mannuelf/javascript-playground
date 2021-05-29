import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './testUtils';
import Input from './Input';

/**
 * Mock the react package
 * spread in the actual react package
 * overwrite the useState: with my own use state
 */
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetCurrentGuess],
}));

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'train') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'train' });
});

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    // simulate the act of user giving a value to the input.
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('guess is made with empty string', () => {
    const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click');
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
