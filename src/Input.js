import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test='input-component'>
      <form className='form-inline'>
        <input
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          type='text'
          data-test='input-box'
          onChange={(e) => setCurrentGuess(e.target.value)}
          value={currentGuess}
        />
        <button
          onclick={(evt) => evt.preventDefault()}
          data-test='submit-button'
          className='btn btn-primary mb-2'>
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
