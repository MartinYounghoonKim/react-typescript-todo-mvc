import * as React from "react";

class TodoList extends React.Component {
  render () {
    return (
      <div className="todo-app__main">
        <ul className="todo-list">
          <li className="todo-item">
            <button className="toggle" />
            <div className="todo-item__view">
              <div className="todo-item__view__text">text</div>
              <button className="todo-item__destroy" />
            </div>
            <input type="text" className="todo-item__edit" />
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
