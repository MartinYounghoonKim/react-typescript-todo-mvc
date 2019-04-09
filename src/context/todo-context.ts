import { createContext } from 'react';

interface Todo {
    id: string;
    contents: string;
    complete: boolean;
}

export interface TodosInterface {
    [index: number]: Todo;
}

export interface TodosContextInterface {
    todos: TodosInterface;
    setTodo(todos: TodosInterface): void;
}

const todoContext = createContext<TodosContextInterface>({
    todos: [
        {
            id: 'dummy',
            contents: 'dumdydmdyd',
            complete: false,
        },
    ],
    setTodo: data => {},
});

// TODO provider, consumer;

export default todoContext;
