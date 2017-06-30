const opn = require('opn')
const webpack = require('webpack')
const config = require('../config')
const devServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev.conf')

const port = process.env.PORT || config.dev.port 
const compiler = webpack(webpackConfig)

const server = new devServer(compiler, {
  contentBase: 'dist',
  compress: true,
  inline: true,
  stats: {
    colors: true
  }
})

server.listen(port, () => {
  console.log(`server is running at port ${port}`)
  if (config.dev.autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn('http://localhost:' + port)
  }
})
