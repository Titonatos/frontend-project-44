import * as util from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
    return false;
  }

  let x = Math.abs(num1);
  let y = Math.abs(num2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

const generateRound = () => {
  const maxRandomNumber = 30;

  const operand1 = util.getRandomInt(maxRandomNumber);
  const operand2 = util.getRandomInt(maxRandomNumber);

  const question = `${operand1} ${operand2}`;
  const answer = gcd(operand1, operand2);

  return [question, answer];
};

export default () => {
  util.startGame(description, generateRound);
};
