const net = require('net');
// const stdin = process.stdin

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541,
  });
  // interpret incoming data as text
  conn.on('data', () => {
    console.log("Successfully connected to game server")
  })
  conn.setEncoding('utf8'); 
    conn.on('connect', () => {
      conn.write('Name: Aar')
      conn.write('Say: hey')
    })
  // stdin.on('data', (key) => {
  //     console.log(key)
  // conn.write('Move: up')
  // setTimeout(() => {
  //   conn.write('Move: up')
  // }, 30)
  // })
  conn.on('data', data => {
    console.log(data)
  })
  return conn;
}

module.exports = { connect }