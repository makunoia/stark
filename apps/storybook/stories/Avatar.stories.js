import React from "react";
import Avatar from "../components/molecules/Avatar";
import RemixIcon from "../components/molecules/RemixIcon";

export default {
  title: "Molecule/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;
const ImageTemplate = (args) => (
  <Avatar
    {...args}
    image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  />
);

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  size: "large",
  text: "MN",
};

export const IconAvatar = Template.bind({});
IconAvatar.args = {
  size: "large",
  icon: <RemixIcon name="account-circle-fill" />,
};

export const ImageAvatar = ImageTemplate.bind({});
ImageAvatar.args = {
  size: "large",
};
