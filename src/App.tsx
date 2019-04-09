import * as React from 'react';
import './App.css';
import Header from './component/Header';
// import { IPropsFromStore } from './util/utils'
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer
class App extends React.Component{
  state = {}

  render() {
    return (
      <div className="todo-app">
        <Header />
        <div className="todo-app__main">
          <ul className="todo-list">
            <li className="todo-item">
              <button type="button" className="toggle" />
              <div className="todo-item__view">
                <div className="todo-item__view__text">text</div>
                <button type="button" className="todo-item__destroy" />
              </div>
              <input
                type="text"
                className="todo-item__edit"
              />
            </li>
          </ul>
        </div>
        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong>
            <span>item</span>
            left
          </span>
          <ul className="todo-filters">
            <li><a href="#none">All</a></li>
            <li><a href="#none">Active</a></li>
            <li><a href="#none">Completed</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
