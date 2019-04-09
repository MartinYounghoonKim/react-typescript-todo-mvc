import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {inject, observer} from 'mobx-react'
import {ITodoStore} from "./stores";

interface IProps {
  todos: ITodoStore
}
@inject('todos')
@observer
class App extends React.Component<IProps> {
  componentDidMount () {
    this.props.todos.fetchTodos()
  }

  render() {
    const { createTodo } = this.props.todos;
    return (
      <div className="todo-app">
        <Header createTodo={createTodo}/>
        <TodoList todos={this.props.todos.todos}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
