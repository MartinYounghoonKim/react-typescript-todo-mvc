import * as React from 'react';
import './App.css';

import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';

class App extends React.Component {
  public render() {
    return (
      <div className="todo-app">
        <TodoHeader />
        <TodoMain />
        <TodoFooter />
      </div>
    );
  }
}

export default App;
