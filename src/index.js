import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  return name;
};

export const getRandomInt = (max, min = 0) => Math.floor(Math.random() * max + min);

export const getNaturalRandomInt = (max) => Math.floor(Math.random() * max + 1);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getMaxNumberOfRounds = () => 3;

export const ask = (expression) => {
  console.log(`Question: ${expression}`);
};

export const isAnswerCorrect = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const congratulate = (playerName) => {
  console.log(`Congratulations, ${playerName}!`);
};

export const parting = (playerName) => {
  console.log(`Let's try again, ${playerName}!`);
};
