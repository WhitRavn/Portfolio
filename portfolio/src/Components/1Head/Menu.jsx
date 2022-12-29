import React from "react";

export class Menu extends React.Component {
  render() {
    return (
      <div className="section-menu">
        <nav className="nav-menu">
          <ul className="list-menu">
            <il>
              <a>Home</a>
            </il>
            <il>
              <a>Skills</a>
            </il>
            <il>
              <a>Portfolio</a>
            </il>
            <il>
              <a>Contact</a>
            </il>
          </ul>
        </nav>
      </div>
    );
  }
}
