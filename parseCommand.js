const pareseInsertCommand = require("./parsers/insert");
const parsers = [pareseInsertCommand];
module.exports = async function parseCommand(commandString) {
  const command = parsers
    .map((parser) => parser(commandString))
    .find((command) => command != null);

  if (command == null) throw new InvalidCommandError(CommandString);
  return await command.perform();
};
