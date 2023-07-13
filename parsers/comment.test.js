const parseComment = require("./comment");

describe("with two or more dash", () => {
  const command = `jsdfasdf-- adfasfdd saf`;
  test("should return an empty object", () => {
    const commentCommand = parseComment(command);
    expect(commentCommand).toEqual({}); //  returns empty object for comments
  });
});
