const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
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
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: '/imgs'
        }
      }
    ],
  }
};
