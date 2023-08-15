const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AAA"); // Replace "AAA" with your initials

    // Sending Move commands for testing
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);

    setTimeout(() => {
      conn.write("Move: down");
    }, 2000);

    setTimeout(() => {
      conn.write("Move: right");
    }, 3000);

    setTimeout(() => {
      conn.write("Move: left");
    }, 4000);
  });

  return conn;
};

module.exports = { connect };