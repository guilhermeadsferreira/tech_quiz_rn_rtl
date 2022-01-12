export const mustShuffleAnswers = (
  incorrectAnswers: any,
  correctAnswer: any,
  position: number
) => {
  const arr = [...incorrectAnswers];
  arr.splice(position, 0, correctAnswer);
  return arr;
};
