import Alert from "@makunoia/stark/components/Alert";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  title: "Notifications/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const DefaultAlert: Story = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
  },
};

export const SuccessAlert: Story = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    intent: "success",
  },
};

export const DangerAlert: Story = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    intent: "danger",
  },
};

export const WarningAlert: Story = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    intent: "warning",
  },
};

export const InfoAlert: Story = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    intent: "info",
  },
};

export const AlertWithAction: Story = {
  args: {
    title: "Notification Title",
    message:
      "Lorem ipsum dolor sit amet, consecery tetur adipiscing elit. Mauris, ut nibh blandit erat. ",
    intent: "info",
    action: {
      label: "Go to profile",
      onClick: () => alert("Event"),
    },
  },
};
