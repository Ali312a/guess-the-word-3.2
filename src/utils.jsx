export const getRandomWord = () => {
  const words = ['react', 'javascript', 'node', 'vite', 'express'];
  return words[Math.floor(Math.random() * words.length)];
};
