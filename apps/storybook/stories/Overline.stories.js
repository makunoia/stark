import React from "react";
import Overline from "../components/molecules/Overline";
import Badge from "../components/molecules/Badge";
import Button from "../components/Button";

export default {
  title: "Molecule/Overline",
  component: Overline,
};

export const TextContent = (args) => (
  <Overline label="Your Email" tooltip={args.tooltip}>
    <div className="flex items-center justify-between">
      <span className="font-medium">marknoya@eventful.ph</span>
      <Button
        label="Edit"
        type="text"
        variant="primary"
        onClick={() => alert("OnClick event")}
      />
    </div>
  </Overline>
);

export const BadgeContent = (args) => (
  <Overline label="Project Progress" tooltip={args.tooltip}>
    <div className="flex items-center gap-4px">
      <Badge label="100%" variant="success" circular type="solid" />
    </div>
  </Overline>
);

export const WithTooltip = (args) => (
  <Overline
    label="First overline"
    tooltip="This is a helpful tooltip to describe this section"
  >
    <Badge label="Badge" variant="default" type="outline" circular />
  </Overline>
);

// export const BadgeContent = Template.bind({});
// BadgeContent.args = {
//   label: "Your stats today",
// };
// <BadgeContent>asdfgsd</BadgeContent>;
