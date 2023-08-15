// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    
    // Sending movement commands to the server
    if (key === 'w') {
      connection.write("Move: up");
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    }
    
    // Sending chat messages to the server
    if (key === '1') {
      connection.write("Say: Hello, everyone!");
    } else if (key === '2') {
      connection.write("Say: Having a blast!");
    } else if (key === '3') {
      connection.write("Say: Snake time!");
    }
  };


module.exports = { setupInput };