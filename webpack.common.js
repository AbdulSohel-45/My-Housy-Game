/** @format */

const { template } = require("@babel/core");
const hwp = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new hwp({ template: "./public/index.html" })],
};
