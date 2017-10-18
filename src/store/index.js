import { combineReducers, createStore } from 'redux';

import ProgressReducer from '../reducers/Progress';

const combineReducer = combineReducers({
  progress: ProgressReducer,
});

const store = createStore(combineReducer);

export default store;
