/** @format */

const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
});
