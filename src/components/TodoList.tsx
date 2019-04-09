import * as React from "react";
import {ITodo} from "../stores";
import {observer} from "mobx-react";

interface IProps {
  readonly todos: ITodo[];
}

const TodoList: React.FunctionComponent<IProps> = observer(({ todos }) => (
  <div className="todo-app__main">
    <ul className="todo-list">
      {todos.map(( { id, text, isDone }: ITodo) => {
        <li className="todo-item" key={id}>
          <button className="toggle" />
          <div className="todo-item__view">
            <div className="todo-item__view__text">{text}</div>
            <button className="todo-item__destroy" />
          </div>
          <input type="text" className="todo-item__edit" />
        </li>
      })}
    </ul>
  </div>
));
export default TodoList;
