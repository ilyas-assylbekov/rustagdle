import questionPool from "../questionPool";

const initialState = {
    pool: questionPool, 
    currentQuestion: null,
    lives: 3,
    inputValue: '',
    userAnswers: [],
    correctAnswer: false,
    currentIndex: null,
  };
  
  const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_RANDOM_QUESTION':
        return {
          ...state,
          currentQuestion: action.payload,
        };
      case 'DECREMENT_LIVES':
        return {
          ...state,
          lives: state.lives - 1,
        };
      case 'RESET_LIVES':
        return {
          ...state,
          lives: initialState.lives, // Reset to initial number of lives
        };
      case 'SET_INPUT_VALUE':
        return {
          ...state,
          inputValue: action.payload,
        };
      case 'ADD_TO_ARRAY':
        return {
          ...state,
          userAnswers: [...state.userAnswers, action.payload],
        };
      case 'RESET_ARRAY':
        return {
          ...state,
          userAnswers: [],
        };
      case 'SET_CORRECT_ANSWER':
        return {
          ...state,
          correctAnswer: action.payload,
        };
      case 'SET_CURRENT_INDEX':
        return {
          ...state,
          currentIndex: action.payload,
        };
      case 'GET_RAND_QUEST':
        const randInd = Math.floor(Math.random() * state.pool.length);
        return {
          ...state,
          currentQuestion: state.pool[randInd],
          lives: initialState.lives,
          inputValue: '',
          correctAnswer: false,
          currentIndex: randInd,
        };
      default:
        return state;
    }
  };
  
  export default questionReducer;
  