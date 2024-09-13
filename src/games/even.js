import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const roundsToWin = 3;
    let correctAnswersCount = 0;

    while (correctAnswersCount < roundsToWin) {
        const randomNumber = Math.floor(Math.random() * 100); 
        console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;