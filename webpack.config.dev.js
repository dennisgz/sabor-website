"use strict";

var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var WriteFilePlugin = require('write-file-webpack-plugin');
var poststylus = require("poststylus");
var autoprefixer = require("autoprefixer");
var srcPath = path.join(__dirname, "src");
require('es6-promise').polyfill();

module.exports = {
  debug: true,
  devtool: "#cheap-module-eval-source-map",
  devServer: {
    colors: true,
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    inline: true,
    outputPath: path.join(__dirname, './dist')
  },
  resolve: {
    alias: {
      // "facebook": "http://connect.facebook.net/en_US/sdk.js"
      "fbsdk": path.join(__dirname, "fbsdk")
    },
    root: srcPath,
    extensions: ["", ".js", ".jsx", ".styl", ".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG"],
    modulesDirectories: ["node_modules", "src"]
  },
  entry: {
    commons: [
      "jquery",
      "moment",
      "react",
      "react-addons-update",
      "react-bootstrap",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-redux",
      "redux",
      "redux-devtools",
      "redux-devtools-dock-monitor",
      "redux-devtools-log-monitor",
      "redux-thunk",
      "redbox-react"
    ],
    index: [
      "eventsource-polyfill", // necessary for hot reloading with IE
      "webpack-hot-middleware/client",
      path.join(srcPath, "index.js"),
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    pathInfo: true
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, include: srcPath, loader: "babel" },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss") },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus") },
      { test: /\.json$/, loader: "json" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" },
      { test: /fbsdk/, loader: "exports?FB!script" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?prefix=font/" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  // misc plugins
  stylus: {
    use: [
      poststylus([
        "autoprefixer"
      ])
    ]
  },
  postcss: [autoprefixer],
  // webpack plugins
  plugins: [
    new ExtractTextPlugin(
      "[name].css",
      { allChunks: true }
    ),
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, "assets/images/favicon.png"),
      hash: true,
      template: path.join(srcPath, "assets/index.html")
    }),
    new WriteFilePlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "__DEV__": true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      FB: "fbsdk",
      "window.FB": "fbsdk"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js"
    })
  ]
}
