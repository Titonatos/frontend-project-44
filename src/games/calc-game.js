import * as util from '../index.js';

export default () => {
  const playerName = util.greeting();
  const operators = ['+', '-', '*'];
  const correctAnswersToWin = 3;
  const maxNumber = 10;

  console.log('What is the result of the expression?');

  let correctAnswerCount = 0;

  while (correctAnswerCount < correctAnswersToWin) {
    const operand1 = util.getRandomInt(maxNumber);
    const operand2 = util.getRandomInt(maxNumber);
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
      console.log(`Let's try again, ${playerName}!`);
      break;
    }

    correctAnswerCount += 1;
  }

  if (correctAnswerCount === 3) {
    util.congratulate(playerName);
  }
};
