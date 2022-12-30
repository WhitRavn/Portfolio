import React from "react";
import { Menu } from "./Menu";
import { AllContentBox } from "../2Body/AllDisplay/ChildrenBox";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Menu />
      </div>
    );
  }
}
