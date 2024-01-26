// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import ReduxPromise from "redux-promise-middleware";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(ReduxPromise)
    )
);

export default store;
