var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var config = require('../config')
var baseConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

var port = config.dev.port

module.exports = merge(baseConfig, {
  entry: {
    server: 'webpack-dev-server/client?http://localhost:' + port
  },

  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '..', 'src/templates/index/html.js'),
      inject: true
    }),
    new OpenBrowserPlugin({url: 'http://localhost:' + port})
  ]
})