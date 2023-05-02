import React from "react";
import IconButton from "../IconButton";
import RemixIcon from "../molecules/RemixIcon";

export default {
  title: "Button/Icon Button",
  component: IconButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["solid", "outline", "text"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "secondary",
          "info",
          "success",
          "danger",
          "warning",
          "dark",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"],
      },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <RemixIcon name="star-fill" />,
  onClick: () => alert("Clicked!"),
};
