import React from "react";
import { Children, cloneElement, useState } from "react";

export function SectionContent({ children }) {
  const menuChildren = Children.toArray(children);
  console.log(menuChildren);
  return (
    <div>
      {menuChildren.map((child, key) => {
        return (
          <div className="section-menu">
            <nav className="nav-menu">
              <ul className="list-menu">
                <li key={child.key}>{child.props.title}</li>
              </ul>
            </nav>
          </div>
        );
      })}
    </div>
  );
}

export function AllContentBox({ children }) {
  const childrenArray = Children.toArray(children);
  const [current, setCurrent] = useState(childrenArray[0].key);
  const newChildren = childrenArray.map((child) => {
    return cloneElement(child, { selected: child.key === current });
  });

  return (
    <div>
      <div>
        {childrenArray.map((child) => {
          return (
            <button onClick={() => setCurrent(child.key)} key={child.key}>
              {child.props.title}
            </button>
          );
        })}
      </div>
      <div>{newChildren}</div>
    </div>
  );
}

export function ContentBox({ children, selected }) {
  return <div hidden={!selected}>{children}</div>;
}
