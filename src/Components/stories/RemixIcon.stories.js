import React from "react";
import RemixIcon from "../molecules/RemixIcon";

export default {
  title: "Molecule/Remix Icon",
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
