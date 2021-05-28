import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import React, { useEffect } from 'react';
import { getSecretWord } from './actions';
function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

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
