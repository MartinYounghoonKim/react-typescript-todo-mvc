import * as React from 'react';
import TodoCount from './TodoCount';
import Filter from './Filter';

const Footer = () => {
    return (
        <footer className="footer">
            <TodoCount />
            <Filter />
        </footer>
    );
};

export default Footer;
