import * as React from 'react';

const Filter = () => {
    return (
        <ul className="todo-filters">
            <li>
                <a href="#none">All</a>
            </li>
            <li>
                <a href="#none">Active</a>
            </li>
            <li>
                <a href="#none">Completed</a>
            </li>
        </ul>
    );
};

export default Filter;
