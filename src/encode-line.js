const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    console.log(str);

    if (str[i] === str[i - 1]) {
      count++;
    } else {
      // if (count > 1) {
      //   res += count;
      // } else {
      //   res += '';
      // }
      // res += str[i - 1];
      // count = 1;
      res += (count > 1 ? count : '') + str[i - 1];
      count = 1;
    }
  }

  console.log(res);
  return res;

}

module.exports = {
  encodeLine
};
