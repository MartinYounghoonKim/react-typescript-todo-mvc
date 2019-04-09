import * as React from 'react';

interface ITodoItemProp {
  text: string
}

const TodoItem = ({ text }: ITodoItemProp) => {
  return (
    <li className="todo-item">
      <button className="toggle" />
      <div className="todo-item__view">
        <div className="todo-item__view__text">{text}</div>
        <button className="todo-item__destroy" />
      </div>
      <input type="text"
        className="todo-item__edit" />
    </li>
  )
}

export interface ITodo {
  id: number,
  title: string,
  completed: boolean,
}

interface ITodoMainProp {
  todos: ITodo[]
}

const TodoMain = ({ todos }: ITodoMainProp) => {
  return (
    <div className="todo-app__main">
      <ul className="todo-list">{
        todos.map(todo => <TodoItem key={todo.id} text={todo.title}/>)
      } 
      </ul>
    </div>
  )
}

export default TodoMain;