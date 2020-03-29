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
        /*use: {
          loader: "babel-loader",
          options: {
            presets: [
              //["@babel/preset-env",{"targets": {"chrome": "80"}}],
              //"@babel/preset-react"
            ],
            plugins: [
              ["babel-plugin-inferno", {"imports": true}],
              ["babel-plugin-syntax-jsx"],
              ["@babel/plugin-proposal-decorators", {legacy: true}],
              ["@babel/plugin-proposal-class-properties", {loose: true}],
            ]
          }
        }*/
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