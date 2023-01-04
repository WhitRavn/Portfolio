import React from "react";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-box">
        <div className="home-text">
          <p className="h-text-1">Hello, i am </p>
          <p className="h-text-2">
            Jordy Rocacher <br />
            Developpeur Front End
          </p>
          <p className="h-text-3">
            in self taught, I learned web development alone, without training or
            diploma, only with my motivation and the desire to design and create
            through programming languages
          </p>
        </div>
        <div className="home-img"></div>
      </div>
    );
  }
}
