import React from "react";

const imgArray = [
  {
    img: require("../Img/screen1.png"),
    title: "NovalieTravel",
    class: "port-box one",
    text: "sfhhhhhhh hhhhh  hhhhhhhhh hhhhhh hhh",
    classText: "port-text",
  },
  {
    img: require("../Img/screen2.png"),
    title: "Meute2",
    class: "port-box two",
    text: "sfhhhhhhh hhhhhhhhhhh hhhhhhhhh hhhhh",
    classText: "port-text two",
  },
  {
    img: require("../Img/screen0.png"),
    title: "Meander",
    class: "port-box three",
    text: "sfhh hhhhhhhhhh hhhhhhhh hhhhhhh hhhh",
    classText: "port-text",
  },
];

export class Portfolio extends React.Component {
  renderChildrenArray = (item, index) => {
    return (
      <div>
        <div className={item.class} key={index}>
          <img className="port-img" src={item.img} />
          <p className="port-title">{item.title}</p>
          <div className={item.classText}>
            <p className="port-content-text">{item.text}</p>
          </div>
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
