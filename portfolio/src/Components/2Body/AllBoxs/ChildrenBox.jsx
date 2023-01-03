import React from "react";
import { Children, cloneElement, useState, useEffect } from "react";

export function SectionContent({ visible, children }) {
  const boxChildren = Children.toArray(children);

  const [current, setCurrent] = useState(boxChildren[0].key);
  const newBoxChildren = boxChildren.map((child) => {
    return cloneElement(child, { selected: child.key === current });
  });

  function click(e) {
    const key = e.target.dataset.key;
    setCurrent(key);
    console.log(key);
  }

  function handleClick({ child }) {
    console.log(child);
  }

  console.log(newBoxChildren);

  return (
    <div>
      <div className="section-menu">
        <nav className="nav-menu">
          <ul className="list-menu" onClick={click}>
            {boxChildren.map((child) => {
              return (
                <li key={child.key} data-key={child.key}>
                  {child.props.title}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="all-box">
        <div className="section-affichage">
          <div className="change-box">{newBoxChildren}</div>
        </div>
      </div>
    </div>
  );
}

export function ContentBox({ children, selected }) {
  let visible = "content-box";
  /*if (selected) {
    visible += " off";
  }*/

  console.log(selected, visible);
  return (
    <div hidden={!selected} className={visible}>
      {children}
    </div>
  );
}
/** 
  
}*/
