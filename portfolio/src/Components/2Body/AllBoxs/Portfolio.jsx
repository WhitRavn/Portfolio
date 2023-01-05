import React from "react";

const img1 = require("../Img/screen1.png");
export class Portfolio extends React.Component {
  render() {
    return (
      <div className="home-box">
        <div className="home-text">
          <img src={img1} />
        </div>
        <div className="home-img"></div>
      </div>
    );
  }
}
