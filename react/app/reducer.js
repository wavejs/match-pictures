import { combineReducers } from 'redux';

const blockCount = (state = 0) => state;
const answerStatus = (state = 'neutral') => state;

export default combineReducers({
  blockCount,
  answerStatus,
});