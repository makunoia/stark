import React from "react";
import { RemixIcon } from "stark-lib";

export default {
  title: "Data Display/RemixIcon",
  component: RemixIcon,
};

const Template = (args) => (
  <div>
    <RemixIcon name={args.name} />
  </div>
);
export const Icon = Template.bind({});
Icon.args = {
  name: "home-2-line",
};
