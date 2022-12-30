import React from "react";

export class Menu extends React.Component {
  render() {
    return (
      <div className="section-menu">
        <nav className="nav-menu">
          <ul className="list-menu">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
