import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const getRandomInt = (max, min = 0) => Math.floor(Math.random() * max + min);

export const startGame = (rules, startRound) => {
  const roundsCount = 3;

  const userName = greet();

  console.log(rules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = startRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== (correctAnswer).toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
