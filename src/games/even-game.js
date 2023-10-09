import * as util from '../index.js';

export default () => {
  const playerName = util.greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxNumber = 30;

  for (let i = 0; i < util.getMaxNumberOfRounds(); i += 1) {
    const randomedNumber = util.getRandomInt(maxNumber);
    const correctAnswer = randomedNumber % 2 ? 'no' : 'yes';

    console.log(`Question: ${randomedNumber}`);

    const answer = util.getAnswer();

    if (util.isAnswerCorrect(answer, correctAnswer) === false) {
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  util.congratulate(playerName);
};
