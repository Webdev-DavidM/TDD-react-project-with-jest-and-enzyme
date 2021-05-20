import Input from './Input';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

test('renders without error', () => {
  const wrapper = shallow(<Input />);
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});
