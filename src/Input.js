import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ success, secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  if (success) {
    return <div data-test='component-input' />;
  }

  return (
    <div data-test='component-input'>
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
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess('');
          }}
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
