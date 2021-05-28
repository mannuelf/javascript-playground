import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './testUtils';
import Input from './Input';

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
