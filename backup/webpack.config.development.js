const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    "app": './application/start.js',
    //"resume": "./entries/Resume.js",
    //"report-resume": "./entries/ResumeReport.js",
    //"report-vacancy": "./entries/VacancyReport.js",
    //"nelheader": "./entries/nelheader.js",
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/assets/build/",
    filename: "[name].js"
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    //new BundleAnalyzerPlugin()
  ],
  externals: {
    jquery: "jQuery",
    lodash: "_",
    axios: 'axios',
    highcharts: 'Highcharts',
    moment: 'moment'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|libs)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-optional-chaining"],
              ["@babel/plugin-proposal-object-rest-spread"],
              ["@babel/plugin-syntax-dynamic-import"],
              ["@babel/plugin-proposal-decorators", {legacy: true}],
              ["@babel/plugin-proposal-class-properties", {loose: true}],
            ]
          }
        }
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader?helperDirs[]=" + __dirname + "/application/lib/hbs-helpers"
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: false
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [
      "node_modules",
      __dirname + "/libs",
      __dirname + "/css",
      __dirname + "/application",
      __dirname + "/localization",
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
  /*optimization: {
    splitChunks: {
      chunks (chunk) {
        // exclude `my-excluded-chunk`
        return chunk.name === 'wisiwyg';
      }
    },
  }*/
};
