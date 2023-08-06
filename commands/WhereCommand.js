const isMatch = require("lodash/isMatch");

module.exports = class WhereCommand {
  constructor(conditions) {
    this.conditions = conditions;
  }

  perform(data) {
    return data.filter((object) => {
      return isMatch(object, this.conditions);
    });
  }
};
