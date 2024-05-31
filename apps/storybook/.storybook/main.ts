import { StorybookConfig } from "@storybook/react-webpack5";
import { dirname, join } from "path";

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  stories: [
    {
      directory: "../stories",
      files: "*.stories.@(ts|js)",
    },
  ],
  staticDirs: ["./public"],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
        ],
      },
    },
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
