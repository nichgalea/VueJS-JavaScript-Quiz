const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "../"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: true,
          preserveWhitespace: false
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new VueLoaderPlugin()
  ]
};
