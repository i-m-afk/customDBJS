const DeleteCommand = require("../commands/DeleteCommand");

const DELETE_COMMAND = "DELETE";
const FROM_COMMAND = "FROM";

const REGEX = new RegExp(`${DELETE_COMMAND}\\s+${FROM_COMMAND}\\s+(?<tableName>\\S+)`);

function parseDeleteCommand(commandString) {
  const regexMatch = commandString.match(REGEX);
  if (regexMatch == null) return;
  const tableName = regexMatch.groups.tableName;
  return new DeleteCommand({
    tableName,
  });
}

module.exports = parseDeleteCommand;
