import { combineReducers } from 'redux';

const blockCount = (state = 0) => state;

export default combineReducers({
  blockCount,
});