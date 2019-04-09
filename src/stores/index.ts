import { observable, action } from 'mobx';
import axios from 'axios';

export interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
}

export interface ITodoStore {
  todos: ITodo[];
  fetchTodos: () => void;
  createTodo: (text: string) => void;
}

class TodoStore implements ITodoStore {
  @observable todos = [];

  @action fetchTodos = () => {
    axios.get('//localhost:2403/todos')
      .then(res => {
        this.todos = res.data;
      });
  }

  @action createTodo = (text: string) => {
    axios.post('//localhost:2403/todos', { text })
      .then(res => {
        this.todos = res.data
      });
  }
}

const todoStore = new TodoStore();

export default todoStore;
