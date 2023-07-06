const InsertCommand = require("../commands/InsertCommand");

// parse this type of input
// INSERT {"a" : 1, "b": 2} INTO tableName
const INSERT_COMMAND = "INSERT";
const BEFORE_TABLE_COMMAND = "INTO";
const REGEX = new RegExp(
  `${INSERT_COMMAND}\\s+(?<record>{.*})\\s+${BEFORE_TABLE_COMMAND}\\s+(?<tableName>\\S+)`
);

function parseInsertCommand(commandString) {
  const regexMatch = commandString.match(REGEX);
  // not matched
  if (regexMatch == null) return;
  const record = safeParseJSON(regexMatch.groups.record);
  const tableName = regexMatch.groups.tableName;
  if (record == null || tableName === "") return;
  return new InsertCommand({ tableName, record });
}

// return null if cant parse the string
safeParseJSON = (string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    return;
  }
};

module.exports = parseInsertCommand;
