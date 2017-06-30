var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var utils = require('./utils')
var config = require('../config')
var baseConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true
    })
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '..', 'src/templates/index/html.js'),
      inject: true
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].css')
    })
  ]
})

module.exports = webpackConfig