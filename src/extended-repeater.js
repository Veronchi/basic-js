const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatedStrArr = [];
  const arr = [];
  let repTimes = options.hasOwnProperty("repeatTimes")
      ? options.repeatTimes
      : 1,
    separator = options.hasOwnProperty("separator") ? options.separator : "+",
    addition = options.hasOwnProperty("addition") ? `${options.addition}` : "",
    additionRepTimes = options.hasOwnProperty("additionRepeatTimes")
      ? options.additionRepeatTimes
      : 1,
    additionSep = options.hasOwnProperty("additionSeparator")
      ? options.additionSeparator
      : "|";

  for (let i = 1; i <= additionRepTimes; i++) {
    arr.push(addition);
  }
  for (let k = 1; k <= repTimes; k++) {
    repeatedStrArr.push(`${str}${arr.join(additionSep)}`);
  }

  return repeatedStrArr.join(`${separator}`);
}

module.exports = {
  repeater,
};
