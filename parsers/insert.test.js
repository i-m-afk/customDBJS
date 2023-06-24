const parseInsertCommand = require("./insert");

describe("with a valid command", () => {
  const command = `INSERT {"a" : 10, "b" : 20} INTO table`;

  test("It returns valid command", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand.record).toEqual({ a: 10, b: 20 });
    expect(insertCommand.table.tableName).toBe("table");
  });
});
describe("with a invalid record", () => {
  const command = `INSERT {dakjlafdjks} INTO table`;
  test("It returns undefined", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand).toEqual(undefined); // checks for both null and undefined
  });
});
describe("with null record", () => {
  const command = `INSERT {} INTO table`;
  test("It returns null records", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand.record).toEqual({});
  });
});
describe("with no table name", () => {
  const command = `INSERT {"a" : 1} INTO`;
  test("It returns undefined", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand).toBeUndefined(); // checks for undefined
  });
});
describe("with no INSERT clause", () => {
  const command = `{"a" : 10, "b" : 20} INTO table`;
  test("It returns undefined", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand).toBeUndefined();
  });
});
describe("with no INTO clause", () => {
  const command = `INSERT {"a" : 10, "b" : 20} table`;
  test("It returns undefined", () => {
    const insertCommand = parseInsertCommand(command);
    expect(insertCommand).toBeUndefined();
  });
});
