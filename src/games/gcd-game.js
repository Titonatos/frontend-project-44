import * as util from '../index.js';

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

export default () => {
  const playerName = util.greeting();
  const maxRandomNumber = 30;

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < util.getMaxNumberOfRounds(); i += 1) {
    const operand1 = util.getNaturalRandomInt(maxRandomNumber);
    const operand2 = util.getNaturalRandomInt(maxRandomNumber);

    util.ask(`${operand1} ${operand2}`);

    const answer = util.getAnswer();
    const correctAnswer = gcd(operand1, operand2);

    if (util.isAnswerCorrect(answer, correctAnswer.toString()) === false) {
      util.parting(playerName);
      return;
    }
  }

  util.congratulate(playerName);
};
