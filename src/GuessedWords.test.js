import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  GuessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
  ],
};

const setup = (props = {}) => {
  // Below will use the default props to begin with and because of the spread operator after the second props argument
  // this will override the default props when we have actual props so will continue to test
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('doesnt throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

// describes is a method for groping tests together

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('render without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are  words guessed', () => {
  test('render without errors', () => {});
});
