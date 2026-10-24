// src/components/stories/RichTextField.stories.js
import React from "react";
import { RichTextField } from "stark-lib";

export default {
  title: "Inputs/RichTextField",
  component: RichTextField,
};

const Template = (args) => <RichTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "richText",
  label: "Rich Text Editor",
};
