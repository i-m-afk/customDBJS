const parseInsertCommand = require("./parsers/insert");
const parseSelectCommand = require("./parsers/select");
const parseComment = require('./parsers/comment')
const parsers = [parseInsertCommand, parseSelectCommand, parseComment];
module.exports = async function parseCommand(commandString) {
  const command = parsers
    .map((parser) => parser(commandString))
    .find((command) => command != null);

  if (command == null) throw new InvalidCommandError(CommandString);
  return await command.perform();
};
