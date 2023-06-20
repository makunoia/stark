import PropTypes from "prop-types";
import React from "react";
import Tooltip from "./Tooltip";

const Overline = ({ label, children, tooltip }) => {
  return (
    <div className="flex flex-col gap-4px">
      <div className="text-caption text-copy-caption flex item-center gap-8px">
        <span className="uppercase font-bold tracking-widest">
          {label ? label : "Overline"}
        </span>
        {tooltip && (
          <Tooltip
            content={tooltip.content ? tooltip.content : "Tooltip"}
            position={tooltip.position ? tooltip.position : "bottom"}
          />
        )}
      </div>
      {children}
    </div>
  );
};

Overline.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string,
    position: PropTypes.string,
  }),
};

export default Overline;
