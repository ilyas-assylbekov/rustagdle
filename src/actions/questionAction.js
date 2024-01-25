export const setRandomQuestion = (question) => ({
    type: 'SET_RANDOM_QUESTION',
    payload: question,
  });

export const decrementLives = () => ({
  type: 'DECREMENT_LIVES',
});

export const resetLives = () => ({
  type: 'RESET_LIVES',
});
  