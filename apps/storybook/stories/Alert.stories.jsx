import { Alert } from "stark-lib";
const meta = {
  title: "Feedback/Alert",
  component: Alert,
};
export default meta;
export const DefaultAlert = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  },
};
export const SuccessAlert = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    variant: "success",
  },
};
export const DangerAlert = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    variant: "danger",
  },
};
export const WarningAlert = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    variant: "warning",
  },
};
export const InfoAlert = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    variant: "info",
  },
};
export const AlertWithAction = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    variant: "info",
    action: {
      label: "Go to profile",
      onClick: () => alert("Event"),
    },
  },
};
