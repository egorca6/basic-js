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
//    npm run test ./test/what-season.test

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    console.log("instanceof");
    throw new Error("Invalid date!");
  }
  try {
    isNaN(date);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Invalid date!");
    }
  }

  // else if (isNaN(date)) {
  //   console.log("tricky ");
  //   throw new Error("Invalid date!");
  // }
  const month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) {
    return "winter";
  } else if (month === 2 || month === 3 || month === 4) {
    return "spring";
  } else if (month === 5 || month === 6 || month === 7) {
    return "summer";
  } else if (month === 8 || month === 9 || month === 10) {
    return "autumn";
  }

  console.log("Входная переменная = " + date);
  // console.log("Месяц = " + month);
  // console.log("Это Месяц?  = " + !date);
  // console.log("Это Месяц2?  = " + Date.parse(`${date}`));
}

module.exports = {
  getSeason,
};
// if (typeof date !== "object") {
//   console.log("typeof ");
//   throw new Error("Invalid date!");
// }
// if (isNaN(date)) {
//   console.log("tricky");
//   throw new Error("Invalid date!");
// }
