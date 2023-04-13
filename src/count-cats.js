const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 * npm run test ./test/count-cats.test
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
      // console.log(matrix[i][j]);
      if (matrix[i][j] == "^^") {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}
countCats([
  [0, 1, 4],
  [0, 5, 2],
  [8, 1, 2],
]);
module.exports = {
  countCats,
};
