import React, { FC, HTMLProps } from "react";
import "remixicon/fonts/remixicon.css";

interface RemixIconProps extends Omit<HTMLProps<HTMLElement>, "ref"> {
  name: string;
  className?: string;
}

const RemixIcon: FC<RemixIconProps> = ({ name, className = "", ...props }) => {
  return <i className={`ri-${name} ${className}`} {...props}></i>;
};

export default RemixIcon;
