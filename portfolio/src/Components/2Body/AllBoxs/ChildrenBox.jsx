import React from "react";
import { Children, cloneElement, useState } from "react";

export function SectionContent({ children }) {
  const boxChildren = Children.toArray(children);

  const [current, setCurrent] = useState(boxChildren[0].key);
  const newBoxChildren = boxChildren.map((child) => {
    return cloneElement(child, { selected: child.key === current });
  });

  return (
    <div>
      <div className="section-menu">
        <nav className="nav-menu">
          <ul className="list-menu">
            {boxChildren.map((child) => {
              return (
                <li
                  onClick={() =>
                    setTimeout(() => {
                      setCurrent(child.key);
                    }, 500)
                  }
                  key={child.key}
                >
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
  if (!selected) {
    visible += " off";
  }
  console.log(visible);
  return (
    <div hidden={!selected} className={visible}>
      {children}
    </div>
  );
}
/** 
  
}*/
