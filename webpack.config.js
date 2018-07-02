const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/ant-theme-vars.less'), 'utf8'));
module.exports = {
  watch: true,
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      moment: 'moment/moment'
    },
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env','react','stage-2']
        }
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: ['env','react','stage-2'],
          plugins: [
            ['import', { libraryName: "antd", style: true }]
          ]
        },
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([
          {loader: "css-loader"},
          {loader: "less-loader",
            options: {
              modifyVars: themeVariables,
              root: path.resolve(__dirname, './')
            }
          }
        ])
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|pdf)$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      SERVICE_URL: JSON.stringify("https://job-search-backend-api.herokuapp.com/api/")
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/index.html',
        to: 'index.html',
        context: './',
        toType: 'file',
        force: true
      },
    ])
  ],
};
