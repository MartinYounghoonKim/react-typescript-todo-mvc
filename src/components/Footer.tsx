import * as React from "react";

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
          <span className="todo-count">
            <strong>1</strong>
            <span>item</span>
            left
          </span>
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
      </footer>
    );
  }
}

export default Footer;
