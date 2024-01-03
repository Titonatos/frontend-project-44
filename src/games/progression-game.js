import getRandomInt from '../utils.js';
import { startGame } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, sequenceLength) => {
  const maxRandomNumber = 10;
  const stepSize = getRandomInt(0, maxRandomNumber);

  const sequence = [startNumber];

  for (let i = 1; i < sequenceLength; i += 1) {
    sequence.push(sequence[i - 1] + stepSize);
  }

  return sequence;
};

const generateRound = () => {
  const startNumber = 10;
  const sequenceLength = 5;

  const sequence = getProgression(startNumber, sequenceLength);

  const randomIndex = getRandomInt(0, sequence.length);

  const answer = sequence[randomIndex];
  sequence[randomIndex] = '..';

  const question = sequence.toString().replaceAll(',', ' ');

  return [question, answer];
};

export default () => {
  startGame(description, generateRound);
};
