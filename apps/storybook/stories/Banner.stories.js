import React from "react";
import Banner from "@makunoia/stark-ui/components/Banner";

export default {
  title: "Notifications/Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const DefaultBanner = Template.bind({});
DefaultBanner.args = {
  title: "Banner",
  message:
    "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing.",
};

export const InfoBanner = Template.bind({});
InfoBanner.args = {
  title: "Banner",
  message:
    "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing.",
  variant: "info",
};

export const SuccessBanner = Template.bind({});
SuccessBanner.args = {
  title: "Banner",
  message:
    "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing.",
  variant: "success",
};

export const WarningBanner = Template.bind({});
WarningBanner.args = {
  title: "Banner",
  message:
    "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing.",
  variant: "warning",
};

export const ErrorBanner = Template.bind({});
ErrorBanner.args = {
  title: "Banner",
  message:
    "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing.",
  variant: "danger",
};
