const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  debugger;
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, "src"),
              path.resolve(__dirname, "node_modules/react-native-uncompiled")
            ],
            use: {
              loader: "babel-loader",
              options: {
                cacheDirectory: true
              }
            }
          }
        ]
      },
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    presetsConfig({ mode, presets })
  );
};
