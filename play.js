const net = require("net");

// establishes a connection with the game server
const connectToServer = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Handle the connect event
  conn.on("connect", () => {
    console.log("Connected to server");
  });

  return conn;
};

console.log("Connecting ...");
connectToServer();

const { connect } = require("./client");

const connection = connect(); // This line now uses the imported connect function

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

// Call setupInput to enable user input handling
setupInput();