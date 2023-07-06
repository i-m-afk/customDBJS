const { v4: uuidV4 } = require("uuid");
const fs = require("fs");
const TableDoesNotExistError = require("./errors/TableDoesNotExistError");
const { resolve } = require("path");
const { rejects } = require("assert");
const { error } = require("console");

module.exports = class Table {
  constructor(tableName) {
    this.tableName = tableName;
  }
  get filePath() {
    return `data/${this.tableName}.json`;
  }

  overwriteTable(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath, JSON.stringify(data), (error) => {
        if (error) return reject(error);
        resolve();
      });
    });
  }

  insertRecord(record) {
    // record has unique id
    const recordWithID = { _id: uuidV4(), ...record };
    // get data
    return new Promise((resolve, reject) => {
      this.readData()
        .catch((e) => {
          if (e instanceof TableDoesNotExistError) {
            return [];
          } else {
            reject(e);
          }
        })
        .then((data) => {
          fs.writeFile(this.filePath, JSON.stringify([...data, recordWithID]), (error) => {
            if (error) return reject(error);
            resolve(recordWithID);
          });
        });
    });

    // if table exists, append at the last
    // else table doesnot exist create the table and enter the record
  }
  readData() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, (error, data) => {
        //if (error) return reject(new Error("Table not found"));
        if (error) return reject(new TableDoesNotExistError(this.tableName));

        resolve(JSON.parse(data));
      });
    });
  }
};
