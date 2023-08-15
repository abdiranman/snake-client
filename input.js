// Setup user input handling
const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    // Register "data" event listener for stdin
    stdin.on("data", handleUserInput);
  
    return stdin;
  };
  
  // Handle user keyboard input
  const handleUserInput = function (key) {
    if (key === '\u0003') { // '\u0003' represents CTRL + C
      process.exit();
    }
    // Handle other user input for controlling the snake
  };
  
  // Export the setupInput function
  module.exports = { setupInput };