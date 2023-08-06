// return null if can't parse the string
const safeParseJSON = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    // console.error("Error parsing JSON: ", e);
    return;
  }
};

module.exports = safeParseJSON;
