// src/components/stories/RichTextField.stories.js
import React from "react";
import RichTextField from "@makunoia/stark-ui/components/RichTextField";

export default {
  title: "Input/Rich Text Field",
  component: RichTextField,
};

const Template = (args) => <RichTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "richText",
  label: "Rich Text Editor",
};
