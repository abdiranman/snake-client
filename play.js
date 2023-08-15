const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

// Setup user input handling
const input = setupInput(connection);

// Handle user keyboard input
input.handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // Handle other user input for controlling the snake
  // For example, you can add more commands here
};

// Call setupInput to enable user input handling
input.handleUserInput = input.handleUserInput.bind(input); // Bind handleUserInput to the input object