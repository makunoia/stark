import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Stark",
    brandImage:
      "https://raw.githubusercontent.com/eventful-ph/stark/master/src/assets/Stark%20Logo.png?token=GHSAT0AAAAAACBV3RBYJIBMAIFC7NMNEQGSZCRB7RQ",
  },
});
