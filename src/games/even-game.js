import * as util from '../index.js';

export default () => {
  const playerName = util.greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxNumber = 30;
  let correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const randomedNumber = util.getRandomInt(maxNumber);
    const correctAnswer = randomedNumber % 2 ? 'no' : 'yes';

    console.log(`Question: ${randomedNumber}`);

    const answer = util.getAnswer();

    if (util.isAnswerCorrect(answer, correctAnswer)) {
      correctAnswerCount += 1;
    } else {
      correctAnswerCount = 0;
    }
  }

  util.congratulate(playerName);
};
