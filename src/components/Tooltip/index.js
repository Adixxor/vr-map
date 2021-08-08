import React, { useState } from "react";
import "./index.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    // Ustaw active na true z opóźnieniem
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    // Przerwij ustawianie active na true jeśli kursor opuści element zanim pojawi się tooltip
    clearInterval(timeout);
    // Ustaw active na false
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // Kiedy pokazać tooltip
      onMouseEnter={showTip}
      // Kiedy schować tooltip
      onMouseLeave={hideTip}
    >
      {/* Wyświetl opakowane komponenty */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Tooltip tekst */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;