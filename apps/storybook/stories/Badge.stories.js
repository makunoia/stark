import React from "react";
import Badge from "stark-lib/components/molecules/Badge";

export default {
  title: "Molecule/Badge",
  component: Badge,
};

const Template = (args) => {
  return (
    <div>
      <Badge {...args} />
    </div>
  );
};

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
  label: "Primary Badge",
  variant: "primary",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Primary Badge",
  variant: "success",
  type: "outline",
};

export const Circular = Template.bind({});
Circular.args = {
  label: "Primary Badge",
  variant: "danger",
  type: "outline",
  circular: true,
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  label: "Primary Badge",
  variant: "primary",
  dismissible: true,
  onDismiss: () => alert("Dismissed Button"),
};
