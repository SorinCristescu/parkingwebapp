import { combineReducers } from 'redux';
import { counterReducer, timerReducer } from './places/reducers';

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
};

export default combineReducers(reducers);
