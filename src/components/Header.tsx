import * as React from "react";
import {FormEvent, KeyboardEvent } from "react";

interface IProps {
  createTodo: (text: string) => void;
}
interface IState {
  text: string;
}
class Header extends React.Component<IProps, IState> {
  state: IState = {
    text: ""
  };

  onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const { text } = this.state;
    if (e.key === "Enter") {
      if (!text) {
        return alert("할일을 입력해주세요")
      }
      this.props.createTodo(text);
      this.setState(()=>({text: ''}))
    }
  }
  onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    this.setState(() => ({ text }));
  }
  render () {
    const { text } = this.state;
    const { onChangeHandler, onKeyDownHandler } = this;
    return (
      <header>
        <h1 className="todo-app__header">todos</h1>
        <input
          type="text"
          className="todo-app__new-todo"
          value={text}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </header>
    );
  }
}

export default Header;
