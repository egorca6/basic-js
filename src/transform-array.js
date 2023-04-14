const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *  transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * npm run test ./test/transform-array.test
 */

function transform(arr) {
  if (!(arr instanceof Array)) {
    console.log("Ошибка");
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  console.log("Входящий массив ", arr);
  let arr1 = [...arr];
  let newArr = [];
  arr1.forEach((e, index) => {
    if (e === "--double-next") {
      // console.log("Текущий индекс и элемент: ", index, e);
      // console.log("след элем: ", arr[index + 1]);
      if (index == arr1.length - 1) {
        return false;
      } else {
        e = arr1[index + 1];
        newArr.push(e);
      }
    } else if (e === "--double-prev") {
      if (index == 0) {
        return false;
      } else {
        e = arr1[index - 1];
        newArr.push(e);
      }
    } else if (e === "--discard-prev") {
      if (index == 0) {
        console.log("опа");
        // console.log("Вырезаем: ", arr1.splice(index, 1));
        // arr1.splice(index, 1);
        return false;
      } else {
        console.log("Текущий индекс и элемент: ", index, e);
        console.log("пред элем: ", arr1[index - 1]);
        arr1.splice(index - 1, 1);
        // console.log("Вырезаем: ", arr1.splice(index - 1, 1));
      }
    } else if (e === "--discard-next") {
      if (index == arr1.length - 1) {
        return false;
      } else {
        // console.log("Текущий индекс и элемент: ", index, e);
        // console.log("след элем: ", arr1[index + 1]);
        arr1.splice(index + 1, 1);
      }
    } else newArr.push(e);
  });
  console.log("Новый массив: ", newArr);
  return newArr;
}
transform([1, 2, 3, "--discard-next"]);
// ['--discard-prev', 1, 2, 3],
// ['--double-prev', 1, 2, 3],
// [1, 2, 3, '--double-next'],
// [1, 2, 3, '--discard-next']
module.exports = {
  transform,
};
