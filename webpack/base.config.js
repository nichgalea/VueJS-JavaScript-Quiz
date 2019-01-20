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
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|otf|eot|ico)$/,
        loader: "url-loader",
        query: {
          name: "[name].[hash].[ext]",
          outputPath: "assets/",
          limit: 10000
        }
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
