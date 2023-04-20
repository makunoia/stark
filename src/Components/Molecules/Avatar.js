import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ icon, image, text, tiny, small, large, xlarge }) => {
  const getSizeClasses = () => {
    if (tiny) {
      return {
        avatar: "w-[16px] h-[16px] border-none border-white",
        font: "text-[6px]",
        icon: "text-[16px]",
      };
    } else if (small) {
      return {
        avatar: "w-[32px] h-[32px] border-2 border-white shadow-md ",
        font: "text-[10px]",
        icon: "text-[24px]",
      };
    } else if (large) {
      return {
        avatar: "w-[60px] h-[60px] border-4 border-white shadow-md ",
        font: "text-[20px]",
        icon: "text-[40px]",
      };
    } else if (xlarge) {
      return {
        avatar: "w-[80px] h-[80px] border-4 border-white shadow-md ",
        font: "text-[24px]",
        icon: "text-[60px]",
      };
    } else {
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
          <i className="ri-account-circle-fill"></i>
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
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
};

Avatar.defaultProps = {
  icon: null,
  image: null,
  text: null,
  tiny: false,
  small: false,
  large: false,
  xlarge: false,
};

export default Avatar;
