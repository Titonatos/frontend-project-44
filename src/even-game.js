import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  return name;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const startEvenGame = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxNumber = 30;
  let correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const randomedNumber = getRandomInt(maxNumber);
    const correctAnswer = randomedNumber % 2 ? 'no' : 'yes';

    console.log(`Question: ${randomedNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      correctAnswerCount = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  }

  console.log(`Congratulations, ${playerName}`);
};
