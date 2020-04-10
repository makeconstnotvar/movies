let path = require("path");
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    //new BundleAnalyzerPlugin()
  ],
  entry: {
    script: "./app/client.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
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