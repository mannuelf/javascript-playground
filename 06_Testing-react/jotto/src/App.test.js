import { mount } from 'enzyme';
import { findByTestAttr } from './testUtils';
import App from './App';

// activate global mock ensure getSecretWord does'nt make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

/*
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  // use mount, useEffect not called on shallow
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

test('Renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });

  test('get secret word on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveReturnedTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps becasue wrapper.update() doesn't trigger useEffect https: github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
