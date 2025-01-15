const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: { name: "stark-lib", type: "umd" },
    umdNamedDefine: true,
    globalObject: "this",
  },
  optimization: {
    minimize: true,
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
    motion: "motion",
    "radix-ui": "radix-ui",
    "lottie-react": "lottie-react",
    "class-variance-authority": "class-variance-authority",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "tailwind.plugin.ts"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "./src/fonts"),
          to: path.resolve(__dirname, "dist/fonts"),
        },
        {
          from: path.resolve(__dirname, "./src/tokens.css"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
      cleanAfterEveryBuildPatterns: [`!components/*`, `!context/*`, `stories`],
    }),
  ],
};
