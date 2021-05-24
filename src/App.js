import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import React from 'react';

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div className='container' data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      {/* <Input success={success} secretWord={secretWord} /> */}
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
