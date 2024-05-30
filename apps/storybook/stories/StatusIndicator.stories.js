import React from "react";
import StatusIndicator from "@makunoia/stark-ui/components/molecules/StatusIndicator";

export default {
  title: "Molecule/Status Indicator",
  component: StatusIndicator,
};

const Template = (args) => <StatusIndicator {...args} />;
export const Indicator = Template.bind();
Indicator.args = {
  status: "online",
};
