import * as util from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const maxRandomNumber = 10;

  const operator = operators[util.getRandomInt(operators.length)];

  const operand1 = util.getRandomInt(maxRandomNumber);
  const operand2 = util.getRandomInt(maxRandomNumber);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculate(operand1, operand2, operator);

  return [question, answer];
};

export default () => {
  util.startGame(description, generateRound);
};
