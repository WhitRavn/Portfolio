import React from "react";
import { Menu } from "./Menu";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Menu />
      </div>
    );
  }
}
