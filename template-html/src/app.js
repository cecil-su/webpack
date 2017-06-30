import tpl from 'app.tpl'

export default {
  log: function (msg) {
    console.log(msg)
    return this
  },
  init: function (title) {
    console.log('title')
    return this
  },
  render: function (content) {
    const data = {
      content
    }
    return tpl(data)
  }
}