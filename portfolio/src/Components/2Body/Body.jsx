import React from "react";
import { SectionAffichage } from "./Display";
import { SectionImage } from "./Image";

export class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <SectionAffichage />
      </div>
    );
  }
}
