import React, { useState } from 'react';

const LetterInput = ({ onLetterSubmit }) => {
  const [letter, setLetter] = useState('');

  const handleChange = (e) => {
    setLetter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (letter.length === 1) {
      onLetterSubmit(letter.toLowerCase());
      setLetter('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={letter}
        onChange={handleChange}
        maxLength="1"
        placeholder="Enter a letter"
        className="letter-input"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default LetterInput;
