import React, { useState } from "react";
import "./MenuItem.css";

export default function MenuItem(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="cityname">
      <div className="pointer" onClick={handleClick}>
        {props.cityname}
      </div>
      {open && (
        <div className="cityset">
          {props.cityset.map((item) => (
            <div className="pointer">{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
