import Congrats from './Congrats';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '././test/testUtils';
import checkPropTypes from 'check-prop-types';
const defaultProps = { success: false };

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setUpProps} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when success props are false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when success props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('doesnt throw warning with expected props', () => {
  const expectedProps = { success: false };

  checkProps(Congrats, expectedProps);
});
