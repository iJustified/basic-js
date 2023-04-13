const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let res = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (i === 0 || matrix[i - 1][j] !== 0) {
        res += matrix[i][j];
      }
    }
  }
  
  return res;

}

module.exports = {
  getMatrixElementsSum
};
