import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='increment-button']");
  expect(appComponent.length).toBe(1);
  //
});

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-display']");
  expect(appComponent.length).toBe(1);
  //
});

test('counter display starts at 0', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
  //
});

test('clikcing button increments counter display', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
  //
});
