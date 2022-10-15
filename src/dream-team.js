const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length == 0) return false;

  let correctMembers = members.filter((i) => typeof i === "string");
  let arr = correctMembers.map((i) => i.trim().toUpperCase());
  let sortMembers = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let firstCharArr = sortMembers.map((i) => i.slice(0, 1));

  return firstCharArr.reduce((acc, prev) => acc + prev, "");
}

module.exports = {
  createDreamTeam,
};
