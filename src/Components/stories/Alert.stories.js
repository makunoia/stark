import React from "react";
import Alert from "../Alert";

export default {
  title: "Notifications/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;
export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
  title: "Notification Title",
  message:
    "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  title: "Notification Title",
  message:
    "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  variant: "success",
};

export const DangerAlert = Template.bind({});
DangerAlert.args = {
  title: "Notification Title",
  message:
    "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  variant: "danger",
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  title: "Notification Title",
  message:
    "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  variant: "warning",
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  title: "Notification Title",
  message:
    "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  variant: "info",
};

export const AlertWithAction = Template.bind({});
AlertWithAction.args = {
  title: "Notification Title",
  message:
    "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  variant: "info",
  action: {
    label: "Go to profile",
    onClick: () => alert("Event"),
  },
};
