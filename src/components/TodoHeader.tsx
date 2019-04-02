import * as React from 'react';

const TodoHeader = () => {
  const [title, useTitle] = React.useState('');

  function onChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    useTitle(e.target.value);
  }

  function onSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodo(title)
  }

  function addTodo(text: string) {
    fetch('http://localhost:3000/todos', {
      body: JSON.stringify({
        completed: false,
        title: text,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
  }

  return (
    <header>
      <form onSubmit={onSubmitTodo}>
        <h1 className="todo-app__header">todos</h1>
        <input type="text"
          className="todo-app__new-todo" onChange={onChangeTodo} />
        <button />
      </form>
    </header>
  )
}

export default TodoHeader;
