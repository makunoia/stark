import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Stark Design System",
    // brandImage:
    //   "https://raw.githubusercontent.com/eventful-ph/stark/master/.storybook/Stark%20Logo.png?token=GHSAT0AAAAAACC7J7LTFTEHC6HGPBT5D5PMZDNZEIQ",
  },
});
