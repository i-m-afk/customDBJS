const readLine = require("readline");
const parseCommand = require("./parseCommand");
const fs = require("fs");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function start() {
  checkFileExist();
  while (true) {
    try {
      const commandString = await waitForCommand();
      printJSON(await parseCommand(commandString));
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }
}
start();

function waitForCommand() {
  return new Promise((resolve) => {
    rl.question(">", resolve);
  });
}
function printJSON(string) {
  console.log(JSON.stringify(string, null, 2));
}

function checkFileExist() {
  fs.mkdirSync("./data", { recursive: true });
}
