import React, { useState } from 'react';
import LetterInput from './LetterInput';
import ScoreBoard from './ScoreBoard';
import { getRandomWord } from './utils';

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [score, setScore] = useState(0);

  const handleLetterSubmit = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (word.includes(letter)) {
        setScore(score + 1);
      }
    }
  };

  return (
    <div className="app-container">
      <h1>Guess the Word Game</h1>
      <p>Score: {score}</p>
      <LetterInput onLetterSubmit={handleLetterSubmit} />
      <ScoreBoard word={word} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
