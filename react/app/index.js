import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';
import { Provider } from 'react-redux';

import { initStore } from './store';

import Header from './components/Header';
import BlocksWrapper from './components/BlocksWrapper';
import Block from './components/Block';

const rootElement = document.querySelector('#app');
const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Header
          title="Match Pictures"
          homeUrl="/"
        />
        <BlocksWrapper/>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App/>, rootElement);