import * as util from '../index.js';

export default () => {
  const playerName = util.greeting();
  const operators = ['+', '-', '*'];
  const maxRandomNumber = 10;

  console.log('What is the result of the expression?');

  for (let i = 0; i < util.getmaxRandomNumberOfRounds(); i += 1) {
    const operand1 = util.getRandomInt(maxRandomNumber);
    const operand2 = util.getRandomInt(maxRandomNumber);
    const operator = operators[util.getRandomInt(operators.length)];

    util.ask(`${operand1} ${operator} ${operand2}`);

    const answer = util.getAnswer();
    let correctAnswer;

    switch (operator) {
      case operators[0]:
        correctAnswer = operand1 + operand2;
        break;

      case operators[1]:
        correctAnswer = operand1 - operand2;
        break;

      case operators[2]:
        correctAnswer = operand1 * operand2;
        break;

      default:
        correctAnswer = undefined;
        console.log('Some error');
        return;
    }

    if (util.isAnswerCorrect(answer, correctAnswer.toString()) === false) {
      util.parting(playerName);
      return;
    }
  }

  util.congratulate(playerName);
};
