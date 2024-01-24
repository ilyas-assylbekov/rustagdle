// reducers/index.js
import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  // Add more reducers if needed
});

export default rootReducer;
