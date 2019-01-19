const webpackMerge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

const baseConfig = require("./base.config");

module.exports = webpackMerge(baseConfig, {
  entry: "./src/entry-server.js",
  target: "node",
  output: {
    filename: "server-bundle.js",
    libraryTarget: "commonjs2"
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [new VueSSRServerPlugin()]
});
