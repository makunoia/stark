import React, { FC } from "react";
import { RemixIconProps } from "stark-types";
import "remixicon/fonts/remixicon.css";

const RemixIcon: FC<RemixIconProps> = ({ name, className = "", ...props }) => {
  return <i className={`ri-${name} ${className}`} {...props}></i>;
};

export default RemixIcon;
