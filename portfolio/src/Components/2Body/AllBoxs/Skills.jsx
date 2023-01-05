import React from "react";

export class Skills extends React.Component {
  render() {
    return (
      <div className="skill-section">
        <div className="skill-box">
          <div className="skill-title">
            <span className="span-title">HTML & CSS</span>
          </div>
          <div className="skill-bar">
            <span className="skill-per htmlcss">
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <span className="span-title">Javascript</span>
          </div>
          <div className="skill-bar">
            <span className="skill-per js">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <span className="span-title">React JS</span>
          </div>
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <span className="span-title">Node JS</span>
          </div>
          <div className="skill-bar">
            <span className="skill-per node">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <span className="span-title">PHP</span>
          </div>
          <div className="skill-bar">
            <span className="skill-per php">
              <span className="tooltip">20%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <span className="span-title">MySQL</span>
          </div>
          <div className="skill-bar">
            <span className="skill-per mysql">
              <span className="tooltip">10%</span>
            </span>
          </div>
        </div>
        <div className="skill-img"></div>
      </div>
    );
  }
}
