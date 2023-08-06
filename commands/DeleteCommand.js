const Table = require("../Table");

module.exports = class DeleteCommand {
  constructor({ tableName }) {
    this.table = new Table(tableName);
  }

  async perform(whereCommand) {
    const data = await this.table.readData();
    let dataToBeDeleted = data;
    if (whereCommand) {
      dataToBeDeleted = whereCommand.perform(data);
    }
    const dataToKeep = data.filter((record) => {
      return !dataToBeDeleted.includes(record);
    });

    await this.table.overwriteTable(dataToKeep);
    return dataToBeDeleted.map((record) => record._id);
  }
};
