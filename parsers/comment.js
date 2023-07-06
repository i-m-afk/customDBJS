const CommentCommand = require("../commands/CommentCommand");
const HYPHEN = "--";
const REGEX = new RegExp(`${HYPHEN}+`);

function parseComment(commandString) {
  const regexMatch = commandString.match(REGEX);
  if (regexMatch == null) return;
  return new CommentCommand();
}
module.exports = parseComment;
