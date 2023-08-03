import React, { FC } from "react";
import { RemixIconProps } from "stark-types";
import "remixicon/fonts/remixicon.css";

const RemixIcon: FC<RemixIconProps> = ({
  name,
  className = "",
  ...otherProps
}) => {
  return <i className={`ri-${name} ${className}`} {...otherProps}></i>;
};

export default RemixIcon;
