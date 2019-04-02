import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { IPropsFromStore } from '../util/utils';


interface ITodoList {
  todo: string;
}

@inject('todo')
@observer
class TodoList extends React.Component<IPropsFromStore<ITodoList>> {
  render = () => this.props.todo
}

export default TodoList;