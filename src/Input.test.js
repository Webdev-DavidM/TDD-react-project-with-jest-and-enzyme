import Input from './Input';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils';
import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = {
  secretWord: '',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});

test('props received in the correct type string', () => {
  checkProps(Input, defaultProps);
});

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    // Below I will make a mock event //
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toBeCalledWith('train');
  });
});
