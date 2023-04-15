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
 *    npm run test ./test/extended-repeater.test
 */

function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionSeparator = "|",
    additionRepeatTimes = 1,
  }
) {
  let addString = (addition + additionSeparator).repeat(additionRepeatTimes);
  let lastIndex1 = addString.lastIndexOf(additionSeparator);
  let newAddString = addString.slice(0, lastIndex1);
  let newStr = (str + newAddString + separator).repeat(repeatTimes);
  let lastIndex2 = newStr.lastIndexOf(separator);
  // console.log(newStr.slice(0, lastIndex2));
  return newStr.slice(0, lastIndex2);
}

module.exports = {
  repeater,
};
