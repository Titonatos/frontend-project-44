import getRandomInt from '../utils.js';
import { startGame } from '../index.js';

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

  const operator = operators[getRandomInt(0, operators.length)];

  const operand1 = getRandomInt(0, maxRandomNumber);
  const operand2 = getRandomInt(0, maxRandomNumber);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculate(operand1, operand2, operator);

  return [question, answer];
};

export default () => {
  startGame(description, generateRound);
};
