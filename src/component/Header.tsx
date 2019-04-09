import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { IPropsFromStore } from '../util/utils'

interface IHeader {
  todo: string;
}

const Header: React.FunctionComponent<IPropsFromStore<IHeader>> = inject('todoStore')( observer(()=> (
  <header>
    <h1 className="todo-app__header">todos</h1>
    <input
      type="text"
      className="todo-app__new-todo"
    />
    <button type="button" />
  </header>
)));

export default Header;
