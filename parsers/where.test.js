const parseWhereCommand = require("./where");

describe("with a valid where command", () => {
  const command = 'SELECT * FROM users WHERE { "name": "John Cena", "age": 30 }';
  it("returns a WhereCommand instance", () => {
    expect(parseWhereCommand(command).conditions).toEqual({ name: "John Cena", age: 30 });
  });
});

describe("with an invalid where command", () => {
  const command = "SELECT * FROM users WHERE { name: 'John Cena', age: 30 }";
  it("returns undefined", () => {
    expect(parseWhereCommand(command)).toBeUndefined();
  });
});

describe("with no conditions", () => {
  //   const command = "SELECT * FROM users WHERE {}";
  //   it("returns undefined", () => {
  //     expect(parseWhereCommand(command)).toBeUndefined();
  //   });

  const command1 = "SELECT * FROM users WHERE";
  it("returns undefined", () => {
    expect(parseWhereCommand(command1)).toBeUndefined();
  });

  const command2 = "SELECT * FROM users"; // no where command
  it("returns undefined", () => {
    expect(parseWhereCommand(command2)).toBeUndefined();
  });
});
