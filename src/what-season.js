const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (arguments.length < 1) return "Unable to determine the time of year!";
    if (!(date instanceof Date)) throw Error("Invalid date!");

    date.getMonth();

    if (date.getTime() < 0) date.setFullYear("1970");

    let month = date.getMonth();
    let res;

    if (month === 11 || month === 0 || month == 1) res = "winter";
    if (month >= 2 && month <= 4) res = "spring";
    if (month >= 5 && month <= 7) res = "summer";
    if (month >= 8 && month <= 10) res = "autumn (fall)";

    return res;
  } catch (error) {
    throw Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
