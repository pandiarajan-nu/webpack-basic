const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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
    }
}