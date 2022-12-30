import React from "react";
import { SectionAffichage } from "./Affichage";
import { SectionImage } from "./Image";

export class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <SectionAffichage>
          <ContentBox className="Box1" title="Home">
            1Je suis au delà de toute règle, au sommet de mon art et pourtant si
            risible.
          </ContentBox>
          <ContentBox className="Box2" title="Skills">
            2Je suis au delà de toute lumère, défunt dans les enfers.
          </ContentBox>
          <ContentBox className="Box3" title="Porfolio">
            3Je autre, bien pire que toute chose connu, ailleurs et là bas.
          </ContentBox>
          <ContentBox className="Box4" title="Contact">
            4Il n'y pas plus de "Je", seulement une personne.
          </ContentBox>
        </SectionAffichage>
        <SectionImage />
      </div>
    );
  }
}
