import React from "react";
import { StatusIndicator } from "stark-lib";

export default {
  title: "Data Display/StatusIndicator",
  component: StatusIndicator,
};

const Template = (args) => <StatusIndicator {...args} />;
export const Indicator = Template.bind();
Indicator.args = {
  status: "online",
};
