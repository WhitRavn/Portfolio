import React from "react";

const imgArray = [
  {
    img: require("../Img/screen1.png"),
    text: "NovalieTravel",
    class: "port-box one",
  },
  {
    img: require("../Img/screen2.png"),
    text: "Meute2",
    class: "port-box two",
  },
  {
    img: require("../Img/screen0.png"),
    text: "Meander",
    class: "port-box three",
  },
];

export class Portfolio extends React.Component {
  renderChildrenArray = (item, index) => {
    return (
      <div>
        <div className={item.class} key={index}>
          <img className="port-img" src={item.img} />
          <p className="port-text">{item.text}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="port-section">
        <PortRender dataArray={imgArray}>{this.renderChildrenArray}</PortRender>
      </div>
    );
  }
}

class PortRender extends React.Component {
  render() {
    const { dataArray } = this.props;
    return (
      <div className="port-container-img">
        {dataArray.map((item, index) => {
          return <div key={index}>{this.props.children(item, index)}</div>;
        })}
      </div>
    );
  }
}
