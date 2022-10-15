const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = String(n).split("");
  const result = [];

  nArr.map((item, idx, array) => {
    const arr = [...nArr];
    arr.splice(idx, 1);
    const num = Number(arr.join(""));
    result.push(num);
  });

  return Math.max(...result);
}

module.exports = {
  deleteDigit,
};
