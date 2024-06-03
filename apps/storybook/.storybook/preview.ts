import { Preview } from "@storybook/react";
import "stark-lib/src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
