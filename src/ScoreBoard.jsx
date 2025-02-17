import React from 'react';

const ScoreBoard = ({ word, guessedLetters }) => {
  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  return (
    <div className="score-board">
      <p>{displayWord}</p>
    </div>
  );
};

export default ScoreBoard;
