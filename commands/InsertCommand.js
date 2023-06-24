module.exports = class InsertCommand {
  constructor({ record, tableName }) {
    this.record = record;
    this.tableName = tableName;
  }
};
