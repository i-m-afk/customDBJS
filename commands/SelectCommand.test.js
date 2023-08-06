const exp = require("constants");
const SelectCommand = require("./SelectCommand");

describe("With all columns selected", () => {
  const selectCommand = new SelectCommand({ allColumns: true });
  const data = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 30 },
  ];

  it("returns the data as is", async () => {
    const spy = jest.spyOn(selectCommand.table, "readData").mockResolvedValue(data);

    expect(await selectCommand.perform()).toEqual(data);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});

describe("With specific columns selected", () => {
  const selectCommand = new SelectCommand({ columns: ["id", "name"] });
  const data = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 30 },
  ];

  it("returns only the selected columns", async () => {
    const spy = jest.spyOn(selectCommand.table, "readData").mockResolvedValue(data);

    expect(await selectCommand.perform()).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});

describe("With where command", () => {
  const selectCommand = new SelectCommand({ columns: ["id", "name"] });
  const data = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 30 },
  ];

  it("returns only the selected columns", async () => {
    const spy = jest.spyOn(selectCommand.table, "readData").mockResolvedValue(data);

    expect(await selectCommand.perform()).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
