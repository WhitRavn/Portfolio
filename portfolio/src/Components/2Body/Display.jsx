import React from "react";
import { ContentBox, SectionContent } from "./AllBoxs/ChildrenBox";
import { Home } from "./AllBoxs/Home";
import { Skills } from "./AllBoxs/Skills";
import { Portfolio } from "./AllBoxs/Portfolio";
import { Contact } from "./AllBoxs/Contact";

export class SectionAffichage extends React.Component {
  render() {
    return (
      <SectionContent>
        <ContentBox className="Box1" title="Home">
          <Home />
        </ContentBox>
        <ContentBox className="Box1" title="Skills">
          <Skills />
        </ContentBox>
        <ContentBox className="Box1" title="Portfolio">
          <Portfolio />
        </ContentBox>
        <ContentBox className="Box1" title="Contact">
          <Contact />
        </ContentBox>
      </SectionContent>
    );
  }
}
