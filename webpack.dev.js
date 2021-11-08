const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //3. Injects style tag in to DOM
          "css-loader", //2. Turns css into commonjs
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Injects style tag in to DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns scss into css
        ],
      },
    ],
  },
});
