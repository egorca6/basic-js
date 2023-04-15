const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *   npm run test ./test/carbon-dating.test
 */
function dateSample(sampleActivity) {
  console.log(sampleActivity, typeof sampleActivity);
  if (
    isNaN(sampleActivity) ||
    sampleActivity <= 0 ||
    sampleActivity > 15 ||
    typeof sampleActivity !== "string"
  ) {
    // console.log("false");
    return false;
  }
  let t = Math.ceil(
    (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) /
      Math.log(2)
  );
  // console.log(t, typeof t);
  return t;
}
dateSample(3);
module.exports = {
  dateSample,
};
// assert.equal(dateSample(3), false);
// assert.equal(dateSample(3.312312), false);
// assert.equal(dateSample(false), false);
// assert.equal(dateSample(null), false);
// assert.equal(dateSample(undefined), false);
// assert.equal(dateSample([3]), false);
// assert.equal(dateSample(['3']), false);
// assert.equal(dateSample({ '3.14': '3dec' }), false);
