const setupInput = function (connection) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    stdin.on("data", (key) => {
      handleUserInput(key, connection);
    });
  
    return stdin;
  };
  
  const handleUserInput = function (key, connection) {
    if (key === '\u0003') {
      process.exit();
    }
    // Handle other user input for controlling the snake
    // For example, you can send move commands to the server based on user input
    if (key === 'w') {
      connection.write("Move: up");
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    }
  };
  
  module.exports = { setupInput };