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

export const setInputValue = (value) => ({
  type: 'SET_INPUT_VALUE',
  payload: value,
});

export const addToArray = (value) => ({
  type: 'ADD_TO_ARRAY',
  payload: value,
});

export const resetArray = () => ({
  type: 'RESET_ARRAY',
});

export const setCorrectAnswer = (value) => ({
  type: 'SET_CORRECT_ANSWER',
  payload: value,
});

export const setCurrentIndex = (value) => ({
  type: 'SET_CURRENT_INDEX',
  payload: value,
});

export const getRandQuest = () => ({
  type: 'GET_RAND_QUEST',
});