import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-component';

import Header from './components/Header';

const rootElement = document.querySelector('#app');

const App = () => {
  return (
    <div className="container-fluid">
      <Header
        title="Match Pictures"
        homeUrl="/"
      />
    </div>
  );
};

ReactDOM.render(<App/>, rootElement);