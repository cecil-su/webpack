var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var devServer = require('webpack-dev-server')
var config = require('../config')
var webpackConfig = require('./webpack.dev.conf')

var port = process.env.PORT || config.dev.port
console.log(chalk.yellow('runing dev'))
var compiler = webpack(webpackConfig)
new devServer(compiler, {
  contentBase: 'dist',
  compress: true,
  inline: true,
  stats: {
    colors: true
  }
}).listen(port)

