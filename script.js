const readLine = require("readline");
const parseCommand = require("./parseCommand");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function start() {
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
