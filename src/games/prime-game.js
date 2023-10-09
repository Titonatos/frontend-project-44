import * as util from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export default () => {
  const playerName = util.greeting();
  const maxNumber = 10;
  const minNumber = 3;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < util.getMaxNumberOfRounds(); i += 1) {
    const randomedNumber = util.getRandomInt(maxNumber, minNumber);
    const correctAnswer = isPrime(randomedNumber) ? 'yes' : 'no';

    util.ask(randomedNumber);

    const answer = util.getAnswer();

    if (util.isAnswerCorrect(answer, correctAnswer) === false) {
      util.parting(playerName);
      return;
    }
  }

  util.congratulate(playerName);
};
