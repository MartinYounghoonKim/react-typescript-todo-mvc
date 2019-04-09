import * as React from 'react';
import Header from './container/Header';
import TodoList from './container/TodoList';
import Footer from './container/Footer';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="todo-app">
                <Header />
                <TodoList />
                <Footer />
            </div>
        );
    }
}

export default App;
