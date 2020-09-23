const messages = [];
const example = require('./example')
const chat = require('./chat')
const chat2 = require('./chat2')

module.exports = {
  example,
  chat: (wss, ws, data) => (chat(wss, ws, data, messages)),
  chat2: (wss, ws, data) => (chat2(wss, ws, data, messages))
}
