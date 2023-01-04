import React from "react";
import { Children, cloneElement, useState, useEffect } from "react";

function Fade({ visible, children }) {
  let className = "change-box";
  if (!visible) {
    className += " off";
  }
  return <div className={className}>{children}</div>;
}

export function SectionContent({ children }) {
  const boxChildren = Children.toArray(children);

  const [current, setCurrent] = useState(boxChildren[0].key);
  const newBoxChildren = boxChildren.map((child) => {
    return cloneElement(child, { selected: child.key === current });
  });

  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((o) => !o);

  function handleClick(e) {
    const key = e.target.dataset.key;
    toggle();
    if (key === undefined) {
      toggle();
      return current;
    } else {
      console.log(open);
      const timer = setTimeout(() => {
        setCurrent(key);
        toggle();
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }

  return (
    <div>
      <div className="section-menu">
        <nav className="nav-menu">
          <ul className="list-menu" onClick={handleClick}>
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
          <Fade visible={open}>
            <div>{newBoxChildren}</div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export function ContentBox({ children, selected }) {
  return <div hidden={!selected}>{children}</div>;
}
/** 
  
}*/
