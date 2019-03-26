import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

interface IProps {

}

class App extends React.Component<IProps> {
  render() {
    return (
      <div className="todo-app">
        <Header/>
        <TodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
