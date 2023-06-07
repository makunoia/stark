import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Stark Design System",
    brandImage: "./Stark Logo.png",
  },
});
