const net = require('net');
const { IP, PORT } = require('./constants');
// const stdin = process.stdin

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', () => {
    console.log("Successfully connected to game server")
  })
  conn.on('connect', () => {
    conn.write('Name: Aar')
    conn.write('Say: hey')
  })
  conn.on('data', data => {
    console.log(data)
  })
  // stdin.on('data', (key) => {
  //     console.log(key)
  // conn.write('Move: up')
  // setTimeout(() => {
  //   conn.write('Move: up')
  // }, 30)
  // })
  return conn;
}

module.exports = { connect }