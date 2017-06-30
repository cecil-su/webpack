const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  entry: {
    'dev-server': 'webpack-dev-server/client?http://localhost:' + config.dev.port
  },

  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
