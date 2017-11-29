import { combineReducers } from 'redux';

const blockCount = (state = 0) => state;
const answerStatus = (state = 'neutral', { type, status }) => {
  switch (type) {
    case 'CONFIRM_ANSWERS':
      return status || state;
    case 'RESET_ANSWERS':
      return 'neutral';
    default:
      return state;
  }
  
};
const configInitState = {
  col: 4,
  row: 3,
};
const config = (state = configInitState) => state;

export default combineReducers({
  config,
  blockCount,
  answerStatus,
});