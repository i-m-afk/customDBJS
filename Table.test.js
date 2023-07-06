const Table = require("./Table");
const mock = require("mock-fs");
const TableDoesNotExistError = require("./errors/TableDoesNotExistError");
const fs = require("fs");
//npm i -- save-dev mock-fs
describe("#readData", () => {
  describe("With nonexisting table name", () => {
    beforeEach(() => mock({ data: {} }));
    afterEach(mock.restore);

    test("It throws TableDoesNotExistError", async () => {
      const table = new Table("table");
      await expect(table.readData()).rejects.toThrow(TableDoesNotExistError);
    });
  });

  describe("With an existing table name", () => {
    const data = [
      { a: 1, b: 2 },
      { a: 5, b: 4 },
    ];
    beforeEach(() => mock({ data: { "table.json": JSON.stringify(data) } }));
    afterEach(mock.restore);

    test("It gets all the data in the table", async () => {
      const table = new Table("table");
      // order doesnot matter
      expect(await table.readData()).toEqual(expect.arrayContaining(data));
    });
  });
});

describe("#insertData", () => {
  describe("With nonexisting table name", () => {
    beforeEach(() => mock({ data: {} }));
    afterEach(mock.restore);

    test("It creates a table and inserts record", async () => {
      const table = new Table("table");
      const data = [
        { a: 1, b: 2 },
        { a: 5, b: 4 },
      ];
      const { _id, ...newRecordAttributes } = await table.insertRecord(data);
      expect(JSON.parse(fs.readFileSync(`data/table.json`))).toEqual(
        expect.arrayContaining([{ _id, ...newRecordAttributes }])
      );
      expect(_id).toBeDefined();
      expect(Object.values(newRecordAttributes)).toEqual(data);
    });
  });

  describe("With existing table name", () => {
    const data = [
      { a: 1, b: 2 },
      { a: 5, b: 4 },
    ];
    beforeEach(() => mock({ data: { "table.json": JSON.stringify(data) } }));
    afterEach(mock.restore);

    test("It inserts record", async () => {
      const table = new Table("table");
      const dataToInsert = { a: 8, b: 9 };
      const { _id, ...newRecordAttributes } = await table.insertRecord(dataToInsert);
      expect(JSON.parse(fs.readFileSync(`data/table.json`))).toEqual(
        expect.arrayContaining([...data, { _id, ...newRecordAttributes }])
      );
      expect(_id).toBeDefined();
      expect(newRecordAttributes).toEqual(dataToInsert);
    });
  });
});
describe("#insertData", () => {
  // Test case for inserting record into a nonexisting table
  describe("With nonexisting table name", () => {
    beforeEach(() => mock({ data: {} })); // Set up a mock environment with an empty data directory
    afterEach(mock.restore); // Restore the original environment after each test case

    test("It adds the record", async () => {
      const table = new Table("table"); // Create a new table instance
      const data = [
        { a: 1, b: 2 },
        { a: 5, b: 4 },
      ]; // Data to be inserted
      const { _id, ...newRecordAttributes } = await table.insertRecord(data); // Insert the data and capture the returned record attributes

      // Assertion to check if the inserted record is stored in the table JSON file
      expect(JSON.parse(fs.readFileSync(`data/table.json`))).toEqual(
        expect.arrayContaining([{ _id, ...newRecordAttributes }])
      );

      expect(_id).toBeDefined(); // Assertion to check if the _id field is defined
      expect(Object.values(newRecordAttributes)).toEqual(data); // Assertion to check if the inserted record attributes match the original data
    });
  });

  // Test case for inserting record into an existing table
  describe("With existing table name", () => {
    const data = [
      { a: 1, b: 2 },
      { a: 5, b: 4 },
    ]; // Initial data in the table
    beforeEach(() => mock({ data: { "table.json": JSON.stringify(data) } })); // Set up a mock environment with a table containing initial data
    afterEach(mock.restore); // Restore the original environment after each test case

    test("It inserts a record", async () => {
      const table = new Table("table"); // Create a new table instance
      const dataToInsert = { a: 8, b: 9 }; // Data to be inserted
      const { _id, ...newRecordAttributes } = await table.insertRecord(dataToInsert); // Insert the data and capture the returned record attributes

      // Assertion to check if the inserted record is stored in the table JSON file
      expect(JSON.parse(fs.readFileSync(`data/table.json`))).toEqual(
        expect.arrayContaining([...data, { _id, ...newRecordAttributes }])
      );

      expect(_id).toBeDefined(); // Assertion to check if the _id field is defined
      expect(newRecordAttributes).toEqual(dataToInsert); // Assertion to check if the inserted record attributes match the inserted data
    });
  });
});
