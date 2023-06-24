const insertParser = require("./parsers/insert");
const commandString = `INSERT {"rishav" : 1} INTO table`;
const insertCommand = insertParser(commandString);

async function main() {
  console.log(await insertCommand.perform());
}
main();

// Get user input

// Choose the parser

// Create parser for the input

// Execute the input

// Return data

// repeat
