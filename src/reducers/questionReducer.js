import questionPool from "../questionPool";

const initialState = {
    pool: questionPool, 
    currentQuestion: null,
    lives: 3,
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
      default:
        return state;
    }
  };
  
  export default questionReducer;
  