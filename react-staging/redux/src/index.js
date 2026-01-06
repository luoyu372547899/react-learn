import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

function renderApp() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// 初始化渲染
renderApp();

// 订阅 store 的变化，变化时重新渲染整个 App
store.subscribe(() => {
  renderApp();
});
