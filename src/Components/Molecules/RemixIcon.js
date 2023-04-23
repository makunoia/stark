import React from "react";
import PropTypes from "prop-types";
import "remixicon/fonts/remixicon.css";

const RemixIcon = ({ name, className, ...props }) => {
  return <i className={`ri-${name} ${className}`} {...props}></i>;
};

RemixIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

RemixIcon.defaultProps = {
  className: "",
};

export default RemixIcon;
