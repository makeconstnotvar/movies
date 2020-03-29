let path = require("path");
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let externals = require('webpack-node-externals');

module.exports = {
  mode: "development",
  devtool: false,
  target: "node",
  externals: [externals()],
  entry: {
    server: "./app/server.js"
  },
  output: {
    library: 'MyLibrary',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "./node_modules",
      "./app"
    ]
  },
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    reasons: false,
    usedExports: false,
  },
};