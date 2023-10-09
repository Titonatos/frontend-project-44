import * as util from '../index.js';

const getRandomSequenceOfNumbers = (sequenceLength) => {
  const maxRandomNumber = 10;
  const startNumber = util.getNaturalRandomInt(maxRandomNumber);
  const stepSize = util.getNaturalRandomInt(maxRandomNumber);

  const sequence = [startNumber];

  for (let i = 1; i < sequenceLength; i += 1) {
    sequence.push(sequence[i - 1] + stepSize);
  }

  return sequence;
};

export default () => {
  const playerName = util.greeting();
  const maxRandomNumber = 10;
  const minSequenceLength = 5;

  console.log('What number is missing in the progression?');

  for (let i = 0; i < util.getMaxNumberOfRounds(); i += 1) {
    const sequence = getRandomSequenceOfNumbers(maxRandomNumber, minSequenceLength);

    const randomIndex = util.getRandomInt(sequence.length);
    const correctAnswer = sequence[randomIndex];
    sequence[randomIndex] = '..';

    util.ask(sequence.toString().replaceAll(',', ' '));

    const answer = util.getAnswer();

    if (util.isAnswerCorrect(answer, correctAnswer.toString()) === false) {
      util.parting(playerName);
      return;
    }
  }

  util.congratulate(playerName);
};
