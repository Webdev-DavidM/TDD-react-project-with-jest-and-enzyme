// receive the success state as a prop //
import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulations! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
