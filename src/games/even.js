import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => runGame(gameDescription, generateRound);

export default runEvenGame;
