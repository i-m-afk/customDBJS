const parseSelectCommand = require("./select");

// SELECT * FROM table
describe("With all columns", () => {
  const command = "SELECT * FROM table";

  test("It selects all columns", () => {
    const selectCommand = parseSelectCommand(command);
    expect(selectCommand.allColumns).toBeTruthy(); // check for true
    expect(selectCommand.table.tableName).toBe("table");
  });
});

// SELECT a FROM table

describe("With some columns", () => {
  const command = "SELECT a, b FROM table";

  test("It selects some columns", () => {
    const selectCommand = parseSelectCommand(command);
    expect(selectCommand.columns).toEqual(expect.arrayContaining(["a", "b"]));
    expect(selectCommand.allColumns).toBeFalsy(); // check for false
    expect(selectCommand.table.tableName).toBe("table");
  });
});

// SELECT , FORM TABLE
describe("With malformed command", () => {
  const command = "SELECT , FROM table";

  test("It returns undefined", () => {
    const selectCommand = parseSelectCommand(command);
    expect(selectCommand).toBeUndefined();
  });
});

// SELECT a FROM
describe("With missing table name", () => {
  const command = "SELECT * FROM";

  test("It returns undefined", () => {
    const selectCommand = parseSelectCommand(command);
    expect(selectCommand).toBeUndefined();
  });
});

// SELECT a table
describe("With missing FROM keyword", () => {
  const command = "a FROM table";

  test("It returns undefined", () => {
    const selectCommand = parseSelectCommand(command);
    expect(selectCommand).toBeUndefined();
  });
});

// a FROM table
describe("With missing SELECT clause", () => {
  const command = "a FROM table";

  test("It returns undefined", () => {
    const selectCommand = parseSelectCommand(command);
    expect(selectCommand).toBeUndefined();
  });
});
