const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "@makunoia/stark",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this", // Ensure compatibility with both Node and browser environments
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.ts(x)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
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
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "stark-plugin.ts"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "./src/tokens.css"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "types/index.d.ts"),
          to: path.resolve(__dirname, "dist/types"),
        },
        {
          from: path.resolve(__dirname, "./src/lib"),
          to: path.resolve(__dirname, "dist/lib"),
        },
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [],
      cleanAfterEveryBuildPatterns: [`!components/*`, `!context/*`, `stories`],
    }),
  ],
};
