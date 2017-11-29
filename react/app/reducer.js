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

const blocksInitState = [
  {
    value: 'a',
    isActivated: false,
    display: 'A',
  },
  {
    value: 'a',
    isActivated: false,
    display: 'A',
  }
];
const blocks = (state = blocksInitState, { type, idx }) => {
  switch (type) {
    case 'ACTIVATE_BLOCK':
      const prevState = state[idx];

      return [
        ...state.splice(0, idx),
        Object.assign({}, prevState, { isActivated: !prevState.isActivated }),
        ...state.splice(idx + 1)
      ];
    default:
      return state;
  }
};

export default combineReducers({
  config,
  blockCount,
  answerStatus,
  blocks,
});