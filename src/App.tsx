import * as React from 'react';
import './App.css';

import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoMain, { ITodo } from './components/TodoMain';

async function getTodos(): Promise<ITodo[]> {
  return (await fetch('http://localhost:3000/todos', { method: 'GET' })).json();
}

const App = () => {
  const [todos, useTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
    getTodos().then(responsedTodos => {
      useTodos(responsedTodos);
    })
  }, [])

  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoMain todos={todos}/>
      <TodoFooter />
    </div>
  )
}

export default App;
