const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  return conn;
};

// Export the connect function using ES6 Shorthand syntax
module.exports = { connect };

