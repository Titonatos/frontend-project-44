import * as util from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomSequenceOfNumbers = (sequenceLength) => {
  const maxRandomNumber = 10;
  const startNumber = util.getRandomInt(maxRandomNumber);
  const stepSize = util.getRandomInt(maxRandomNumber);

  const sequence = [startNumber];

  for (let i = 1; i < sequenceLength; i += 1) {
    sequence.push(sequence[i - 1] + stepSize);
  }

  return sequence;
};

const generateRound = () => {
  const maxRandomNumber = 10;
  const minSequenceLength = 5;

  const sequence = getRandomSequenceOfNumbers(maxRandomNumber, minSequenceLength);

  const randomIndex = util.getRandomInt(sequence.length);

  const answer = sequence[randomIndex];
  sequence[randomIndex] = '..';

  const question = sequence.toString().replaceAll(',', ' ');

  return [question, answer];
};

export default () => {
  util.startGame(description, generateRound);
};
