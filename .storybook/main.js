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
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        postCss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
};
export default config;
