import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => runGame(gameDescription, generateRound);

export default runPrimeGame;
