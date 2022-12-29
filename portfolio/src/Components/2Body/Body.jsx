import React from "react";
import { SectionAffichage } from "./Affichage";
import { SectionImage } from "./Image";

export class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <SectionAffichage />
        <SectionImage />
      </div>
    );
  }
}
