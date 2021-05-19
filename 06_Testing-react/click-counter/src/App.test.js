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

test('renders increment button', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'increment-button');
  expect(appComponent.length).toBe(1);
  //
});

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, 'counter-display');
  expect(appComponent.length).toBe(1);
  //
});

test('counter display starts at 0', () => {
  //
});

test('clicking button increments counter display', () => {
  //
});
