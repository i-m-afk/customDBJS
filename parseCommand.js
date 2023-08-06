const parseInsertCommand = require("./parsers/insert");
const parseSelectCommand = require("./parsers/select");
const parseComment = require("./parsers/comment");
const parseWhereCommand = require("./parsers/where");
const parseDeleteCommand = require("./parsers/delete");
const InvalidCommandError = require("./errors/InvalidCommandError");

const parsers = [parseInsertCommand, parseSelectCommand, parseComment, parseDeleteCommand];
module.exports = async function parseCommand(commandString) {
  const command = parsers.map((parser) => parser(commandString)).find((command) => command != null);

  if (command == null) throw new InvalidCommandError(CommandString);

  const whereCommand = parseWhereCommand(commandString);
  return await command.performWhere(whereCommand);
};
