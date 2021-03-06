const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, './app/index.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, './')
    ],
    compress: false,
    port: 6060,
    watchContentBase: true,
    hot: true
  }
};