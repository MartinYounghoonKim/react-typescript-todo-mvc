import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import axios from "axios";
import { observer } from 'mobx-react'
import {action} from "mobx";

interface IProps {

}

@observer
class App extends React.Component<IProps> {
  componentDidMount () {
    axios.get("//localhost:2403/todos")
      .then(res => {
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="todo-app">
        <Header/>
        <TodoList/>
        <Footer/>
      </div>
    );
  }
  @action.bound
  onChange(event: MouseEvent) {
    if (event.currentTarget) {
      return;
    }
    const { name, value } = event.currentTarget;
    this[name] = value;
  }

  onSubmit() {
    const { email, password } = this
    console.log('결과확인 : ', email, password);
  }
}

export default App;
