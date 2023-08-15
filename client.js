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
  });


  return conn;
};

// Export the connect function using ES6 Shorthand syntax
module.exports = { connect };

