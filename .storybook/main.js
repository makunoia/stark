/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/*.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["./public"], //👈 Configures the static asset folder in Storybook
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
