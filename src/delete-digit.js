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
 * npm run test ./test/delete-digit.test
 */
function deleteDigit(number) {
  const myString = `${number}`;
  // console.log(myString.length);
  let max = 0;
  for (let i = 0; i < myString.length; i++) {
    // console.log(myString[i]);
    const newString = myString.slice(0, i) + myString.slice(i + 1);
    if (parseInt(newString) > max) {
      max = parseInt(newString);
    }
  }
  console.log(max);
  return max;
}

module.exports = {
  deleteDigit,
};
