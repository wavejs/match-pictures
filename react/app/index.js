import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initStore } from './store';

import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import BlocksWrapper from './components/BlocksWrapper';
import Indicator from './components/Indicator';

const rootElement = document.querySelector('#app');
const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper className="container-fluid">
        <Header
          title="Match Pictures"
          homeUrl="/"
        />
        <BlocksWrapper/>
        <Indicator/>
      </AppWrapper>
    </Provider>
  );
};

ReactDOM.render(<App/>, rootElement);