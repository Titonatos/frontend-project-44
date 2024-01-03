import getRandomInt from '../utils.js';
import { startGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 ? 'no' : 'yes');

const generateRound = () => {
  const maxNumber = 30;
  const randomedNumber = getRandomInt(1, maxNumber);

  const question = randomedNumber.toString();
  const answer = isEven(randomedNumber);

  return [question, answer];
};

export default () => {
  startGame(description, generateRound);
};
