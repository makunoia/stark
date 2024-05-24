import React from "react";
import PropTypes from "prop-types";
import RemixIcon from "./RemixIcon";

const Avatar = ({ icon, image, text, size }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "tiny":
        return {
          avatar: "w-[16px] h-[16px] border-none border-white",
          font: "text-[6px]",
          icon: "text-[16px]",
        };
      case "small":
        return {
          avatar: "w-[32px] h-[32px] border-2 border-white shadow-md ",
          font: "text-[10px]",
          icon: "text-[24px]",
        };
      case "large":
        return {
          avatar: "w-[60px] h-[60px] border-4 border-white shadow-md ",
          font: "text-[20px]",
          icon: "text-[40px]",
        };
      case "xlarge":
        return {
          avatar: "w-[80px] h-[80px] border-4 border-white shadow-md ",
          font: "text-[24px]",
          icon: "text-[60px]",
        };
      default:
        return {
          avatar: "w-[40px] h-[40px] border-4 border-white shadow-md ",
          font: "text-[12px]",
          icon: "text-[28px]",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  const renderContent = () => {
    if (icon) {
      return (
        <span className={`text-primary-base ${sizeClasses.icon}`}>{icon}</span>
      );
    } else if (image) {
      return (
        <div
          alt="avatar"
          className={`w-full h-full bg-cover bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        />
      );
    } else if (text) {
      const truncatedText = text.length > 2 ? text.slice(0, 2) : text;
      return (
        <span
          className={`font-bold tracking-wider text-white ${sizeClasses.font}`}
        >
          {truncatedText}
        </span>
      );
    } else {
      return (
        <span className={`text-primary-base ${sizeClasses.icon}`}>
          <RemixIcon name="account-circle-fill" />
        </span>
      );
    }
  };

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-[100%] ${
        sizeClasses.avatar
      } ${text ? "bg-primary-base" : "bg-primary-muted"}`}
    >
      {renderContent()}
    </div>
  );
};

Avatar.propTypes = {
  icon: PropTypes.node,
  image: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(["tiny", "small", "large", "xlarge"]),
};

Avatar.defaultProps = {
  icon: null,
  image: null,
  text: null,
  size: "default",
};

export default Avatar;
