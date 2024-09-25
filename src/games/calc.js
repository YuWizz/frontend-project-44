import runGame from './index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = ['+', '-', '*'];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      console.log('Something is going wrong.');
  }
};
  
const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, operator, num2));
  
  return [question, correctAnswer];
};
  
const runCalcGame = () => runGame(gameDescription, generateRound);
  
export default runCalcGame;