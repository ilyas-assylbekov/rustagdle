import questionPool from "../questionPool";

const initialState = {
    pool: questionPool, 
    currentQuestion: null,
    lives: 3,
    inputValue: '',
    userAnswers: [],
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
      default:
        return state;
    }
  };
  
  export default questionReducer;
  