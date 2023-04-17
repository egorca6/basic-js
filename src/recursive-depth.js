const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 * npm run test ./test/recursive-depth.test
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    //   console.log(Array.isArray(arr[0]));
    //   console.log("Длина " + arr.length);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const depth = 1 + this.calculateDepth(arr[i]);
        // console.log("Глубина = " + depth);
        if (depth > count) {
          count = depth;
        }
      }
      console.log(arr[i]);
    }
    // console.log("Счетчик=  " + count);
    return count;
  }
}

module.exports = {
  DepthCalculator,
};
