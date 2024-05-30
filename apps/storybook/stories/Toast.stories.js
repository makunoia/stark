import React from "react";
import Toast from "@makunoia/stark-ui/components/Toast";

export default {
  title: "Notifications/Toast",
  component: Toast,
};

const Template = (args) => <Toast {...args} />;
export const DefaultToast = Template.bind();
DefaultToast.args = {
  message: "Here's a short message",
};

export const InfoToast = Template.bind();
InfoToast.args = {
  title: "Head's up",
  message: "A new update is released",
  variant: "info",
  action: {
    label: "Update",
    onClick: () => alert("clicked"),
  },
};

export const SuccessToast = Template.bind();
SuccessToast.args = {
  title: "Great!",
  message: "Application successfully submitted",
  variant: "success",
  action: {
    label: "Undo",
    onClick: () => alert("clicked"),
  },
};

export const WarningToast = Template.bind();
WarningToast.args = {
  title: "Uh oh!",
  message: "Please try again later",
  variant: "warning",
};

export const DangerToast = Template.bind();
DangerToast.args = {
  title: "404",
  message: "Data not found",
  variant: "danger",
  action: {
    label: "Refresh",
    onClick: () => alert("clicked"),
  },
};

export const ToastWithAction = Template.bind();
ToastWithAction.args = {
  title: "Uh oh!",
  message: "Please try again later",
  variant: "warning",
  action: {
    label: "Try again",
    onClick: () => alert("clicked"),
  },
};
