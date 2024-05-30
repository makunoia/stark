import React from "react";
import StatusIndicator from "stark-lib/components/molecules/StatusIndicator";

export default {
  title: "Molecule/Status Indicator",
  component: StatusIndicator,
};

const Template = (args) => <StatusIndicator {...args} />;
export const Indicator = Template.bind();
Indicator.args = {
  status: "online",
};
