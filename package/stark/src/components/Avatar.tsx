import Text from "./molecules/Text.js";
import React from "react";
import type { HTMLAttributes, ReactNode } from "react";
import RemixIcon from "./RemixIcon.js";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  image?: string;
  text?: string;
  size?: "tiny" | "small" | "default" | "large" | "xlarge";
  alt?: string;
}
const Avatar = ({
  icon,
  image,
  text,
  size = "default",
  alt = "Avatar",
  className = "",
  ...props
}: AvatarProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "tiny":
        return {
          avatar: "w-[16px] h-[16px] border-none border-[hsl(var(--surface))]",
          font: "text-[6px]",
          icon: "text-[16px]",
        };
      case "small":
        return {
          avatar:
            "w-[32px] h-[32px] border-2 border-[hsl(var(--surface))] shadow-sm ",
          font: "text-[10px]",
          icon: "text-[24px]",
        };
      case "large":
        return {
          avatar:
            "w-[60px] h-[60px] border-4 border-[hsl(var(--surface))] shadow-sm ",
          font: "text-[20px]",
          icon: "text-[40px]",
        };
      case "xlarge":
        return {
          avatar:
            "w-[80px] h-[80px] border-4 border-[hsl(var(--surface))] shadow-sm ",
          font: "text-[24px]",
          icon: "text-[60px]",
        };
      default:
        return {
          avatar:
            "w-[40px] h-[40px] border-4 border-[hsl(var(--surface))] shadow-sm ",
          font: "text-[12px]",
          icon: "text-[28px]",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  const renderContent = () => {
    if (icon) {
      return <Text as="span" inherit className={`text-brand ${sizeClasses.icon}`}>{icon}</Text>;
    } else if (image) {
      return (
        <div
          role="img"
          aria-label={alt}
          className={`w-full h-full bg-cover bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        />
      );
    } else if (text) {
      const truncatedText = text.length > 2 ? text.slice(0, 2) : text;
      return (
        <Text as="span" inherit
          className={`font-bold tracking-wider text-oninverse ${sizeClasses.font}`}
        >
          {truncatedText}
        </Text>
      );
    } else {
      return (
        <span className={`text-brand ${sizeClasses.icon}`}>
          <RemixIcon name="account-circle-fill" />
        </span>
      );
    }
  };

  return (
    <div
      {...props}
      className={`${className} flex items-center justify-center overflow-hidden rounded-[100%] ${
        sizeClasses.avatar
      } ${text ? "bg-brand" : "bg-brand-subtle"}`}
    >
      {renderContent()}
    </div>
  );
};

export default Avatar;
