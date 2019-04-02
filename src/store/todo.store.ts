import { observable, action } from 'mobx';

export default class TodoStore {
  @observable todo: string[] = [];

  @action add = (str: string) => {
    this.todo.push(str);
  }
}