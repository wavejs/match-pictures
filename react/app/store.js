import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';

const isDev = true;
const composeEnhancer = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore() {
  return createStore(reducer, composeEnhancer());
}