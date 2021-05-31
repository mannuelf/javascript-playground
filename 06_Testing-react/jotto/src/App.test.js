import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test('Renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
