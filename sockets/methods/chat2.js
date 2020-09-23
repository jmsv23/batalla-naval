const WebSocket = require('ws');

// const messages = [];
module.exports = (wss, ws, data, messages) => {
  messages.push({
    user: data.user,
    m: data.m,
  });

  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        messages
      }));
    }
  });
}
