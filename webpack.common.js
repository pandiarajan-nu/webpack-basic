const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", //3. Injects style tag in to DOM
                    "css-loader", //2. Turns css into commonjs
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Injects style tag in to DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns scss into css
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
}