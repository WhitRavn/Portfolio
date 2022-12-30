import React from "react";
import { Children, cloneElement, useState } from "react";

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
