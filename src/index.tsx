import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import TodoStore from './store/Todo.Store';
// @observer
const todoStore = new TodoStore();

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App/>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
