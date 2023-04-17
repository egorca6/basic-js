const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // let count = 0;
  // for (let i = 0; i < s1.length; i++) {
  //   for (let j = 0; j < s2.length; j++) {
  //     // console.log("первый = " + s1[i], "второй = " + s2[j][i]);
  //     // console.log("что ето = " + s2[i][j]);
  //     if (s1[i][j] === s2[j][i]) {
  //       s1[i][j] = NaN;
  //       s2[j][i] = NaN;
  //       count++;
  //     }
  //   }
  // }
  // console.log(count);
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}
getCommonCharacterCount("aabcc", "adcaa");
module.exports = {
  getCommonCharacterCount,
};
