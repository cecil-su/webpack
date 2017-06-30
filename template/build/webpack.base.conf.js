const path = require('path')
const utils = require('./utils')
const config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      'src': resolve('src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        options: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }
}