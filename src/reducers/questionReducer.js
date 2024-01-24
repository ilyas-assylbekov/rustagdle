import questionPool from "../questionPool";

const initialState = {
    pool: questionPool, 
    currentQuestion: null,
  };
  
  const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_RANDOM_QUESTION':
        return {
          ...state,
          currentQuestion: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default questionReducer;
  