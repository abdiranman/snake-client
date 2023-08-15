const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  // Event handler for "connect" event
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Send your name to the server
    conn.write("Name: AAA"); // Replace "XYZ" with your initials

    // Send move commands to the server
    // Move up
    conn.write("Move: up");

    // Move down after a delay
    setTimeout(() => {
      conn.write("Move: down");
    }, 1000); // Delay of 1000ms (1 second)

    // Move right after a longer delay
    setTimeout(() => {
      conn.write("Move: right");
    }, 2000); // Delay of 2000ms (2 seconds)

    // Move left after an even longer delay
    setTimeout(() => {
      conn.write("Move: left");
    }, 3000); // Delay of 3000ms (3 seconds)
  });

  return conn;
};

module.exports = { connect };