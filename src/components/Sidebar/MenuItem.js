import React from "react";

export default function MenuItem(props) {
  return (
    <li>
      {props.label}
      <ul>
        {props.set.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </li>
  );
}
