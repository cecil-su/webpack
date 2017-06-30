var path = require('path')
var utils = require('./utils')
var config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'app': resolve('src/app.js'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('src'),
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        include: resolve('src')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  }
}