import getRandomInt from '../utils.js';
import { startGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const generateRound = () => {
  const maxNumber = 10;
  const minNumber = 3;

  const randomedNumber = getRandomInt(minNumber, maxNumber);

  const answer = isPrime(randomedNumber) ? 'yes' : 'no';
  const question = randomedNumber;

  return [question, answer];
};

export default () => {
  startGame(description, generateRound);
};
