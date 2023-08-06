const SelectCommand = require("../commands/SelectCommand");

// parse this type of input
// SELECT a FROM tableName
// SELECT * FROM tableName
const SELECT_COMMAND = "SELECT";
const BEFORE_TABLE_COMMAND = "FROM";
const WILDCARD = "*";
const REGEX = new RegExp(
  `${SELECT_COMMAND}\\s+(?<columns>.*)\\s+${BEFORE_TABLE_COMMAND}\\s+(?<tableName>\\S+)`
);

// SELECT a,b FROM tableName
function parseSelectCommand(commandString) {
  const regexMatch = commandString.match(REGEX);
  // not matched
  if (regexMatch == null) return;
  const columns = regexMatch.groups.columns
    .replace(/\s/g, "")
    .split(",")
    .filter((c) => c !== "");
  if (columns.length === 0) return;

  const tableName = regexMatch.groups.tableName;

  return new SelectCommand({
    tableName,
    columns,
    allColumns: columns.includes(WILDCARD), // true if * is present
  });
}

module.exports = parseSelectCommand;
