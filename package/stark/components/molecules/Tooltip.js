import React, { useState } from "react";
import RemixIcon from "./RemixIcon";
import PropTypes from "prop-types";

const Tooltip = ({ content, position = "bottom" }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip((prevState) => !prevState);
  };

  const positionClasses = {
    top: "-top-4px left-1/2 -translate-x-1/2 -translate-y-full",
    bottom: "top-full left-1/2 -translate-x-1/2 translate-y-4px",
    left: "top-1/2 right-full -translate-x-[4px] -translate-y-1/2",
    right: "top-1/2 left-full translate-x-4px -translate-y-1/2",
  };

  return (
    <div
      className="rounded-4px relative"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <RemixIcon name="information-fill" />

      <div
        className={`absolute transform bg-black text-white p-4px rounded-4px text-caption  transition-opacity ease-linear pointer-events-none 
        ${showTooltip ? "opacity-100" : "opacity-0"}
        ${positionClasses[position]} `}
      >
        <span className="whitespace-normal break-words max-w-[200px] block w-max">
          {content}
        </span>
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default Tooltip;
