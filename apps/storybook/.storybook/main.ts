import { StorybookConfig } from "@storybook/nextjs";
import { dirname, join } from "path";

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),

  stories: [
    {
      directory: "../stories",
      files: "*.stories.@(ts|js)",
    },
  ],

  staticDirs: ["./public"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@chromatic-com/storybook"),
  ],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
