import React from 'react';
import { mount } from 'enzyme';
import { storeFactory, checkProps, findByTestAttr } from './testUtils';
import Input from './Input';
import { Provider } from 'react-redux';

/**
 * Mock the react package
 * spread in the actual react package
 * overwrite the useState: with my own use state
 */
let mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetCurrentGuess],
}));

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}, secretWord = 'party') => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>,
  );
};

describe('render', () => {
  describe('success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test('Input renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test('Input renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'train' });
});

describe('state controlled input field', () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();
  let originalUseState;

  beforeEach(() => {
    // clear out previouse state values so the new test does not use previous tests values
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = () => ['🚀', mockSetCurrentGuess];
    wrapper = setup({ success: false });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    // simulate the act of user giving a value to the input.
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('guess is made with empty string', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
