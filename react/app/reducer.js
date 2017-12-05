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
  row: 3
};
const config = (state = configInitState) => state;

const isStart = (state = false, { type }) => {
  switch (type) {
    case 'START_GAME':
      return true;
    default:
      return state;
  }
};

const blocksInitState = [
  {
    id: 'box01',
    value: 'a',
    isActivated: false,
    display: 'A',
    isCleared: false
  },
  {
    id: 'box02',
    value: 'b',
    isActivated: false,
    display: 'B',
    isCleared: false
  },
  {
    id: 'box03',
    value: 'a',
    isActivated: false,
    display: 'A',
    isCleared: false
  },
  {
    id: 'box04',
    value: 'b',
    isActivated: false,
    display: 'B',
    isCleared: false
  }
];
const blocks = (state = blocksInitState, { type, id, status }) => {
  switch (type) {
    case 'ACTIVATE_BLOCK':
      return state.map(data => {
        if (data.id === id) {
          return Object.assign({}, data, { isActivated: !data.isActivated });
        }

        return data;
      });
    case 'RESET_ANSWERS':
      return status
        ? state.map(block => {
          if (block.isActivated) {
            return Object.assign({}, block, { isActivated: false, isCleared: true });
          } else {
            return Object.assign({}, block, { isActivated: false });
          }
        })
        : state.map(block => Object.assign({}, block, { isActivated: false }));
    default:
      return state;
  }
};

export default combineReducers({
  isStart,
  config,
  blockCount,
  answerStatus,
  blocks
});
