import Input from './Input';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils';
import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = {
  secretWord: '',
};

// The function below allows me to use React destucture in this module

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

const setup = (success = false, secretWord = 'party') => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe('render', () => {
  describe('success is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test('Input renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });
    test('submitt button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(false);
    });
    test('Input renders without error', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });
    test('submit button shows', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test('props received in the correct type string', () => {
  checkProps(Input, defaultProps);
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    // Below I will make a mock event //
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  // / This mock event below will check thatsetCurrentGuess gets called when the
  // submit button is clicked //
  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    const mockEvent = { target: { value: '' } };
    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
  // Todo
  // 1) Update guessWords global state
  // 2) Check against secretword and optionally update success global state
});
