import * as util from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const maxNumber = 30;
  const randomedNumber = util.getRandomInt(maxNumber);

  const question = randomedNumber.toString();
  const answer = randomedNumber % 2 ? 'no' : 'yes';

  return [question, answer];
};

export default () => {
  util.startGame(description, generateRound);
};
