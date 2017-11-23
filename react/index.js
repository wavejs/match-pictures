import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#app');

const App = () => {
  return <div>TEST</div>
}

ReactDOM.append(<App/>, rootElement);