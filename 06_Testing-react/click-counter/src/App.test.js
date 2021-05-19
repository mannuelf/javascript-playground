import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the App component.
 * @function setup
 * @returns {shallowWrapper}
 **/
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

describe('Increment button', () => {
  test('renders increment button', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'increment-button');
    expect(appComponent.length).toBe(1);
  });

  test('renders counter display', () => {
    const wrapper = shallow(<App />);
    const appComponent = findByTestAttr(wrapper, 'counter-display');
    expect(appComponent.length).toBe(1);
  });

  test('counter display starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('clicking button increments counter display', () => {
    const wrapper = setup();
    // find the button.
    const button = findByTestAttr(wrapper, 'increment-button');

    // click the button.
    button.simulate('click');

    // find the display, and test that the number has been incremented.
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('Decrement button', () => {
  test('renders a decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('counter display starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('click decrement button decrements display when state is greate than 0', () => {
    const wrapper = setup();

    // click increment button so counter is greater than 0
    const incButton = findByTestAttr(wrapper, 'increment-button');
    incButton.simulate('click');
    // find decrement button and click
    const decButton = findByTestAttr(wrapper, 'decrement-button');
    decButton.simulate('click');
    // find display and test value
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('error when counter goes below 0', () => {
  test('error does not show when not needed', () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });

  describe('counter is 0 and decrement is clicked', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
    });

    test('error shows', () => {
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });

    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');
    });

    test('clicking increment clears the error', () => {
      const incButton = findByTestAttr(wrapper, 'increment-button');
      incButton.simulate('click');

      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});
