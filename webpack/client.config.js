const path = require("path");
const webpackMerge = require("webpack-merge");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const baseConfig = require("./base.config");

const plugins = [new VueSSRClientPlugin()];

if (process.env.NODE_ENV === "development") {
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  plugins.push(
    new HtmlWebpackPlugin({
      title: "Fast Track Test",
      template: "./index.dev-template.html"
    })
  );
}

module.exports = webpackMerge(baseConfig, {
  entry: "./src/entry-client.js",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  plugins
});
