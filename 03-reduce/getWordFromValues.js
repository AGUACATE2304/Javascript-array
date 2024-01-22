/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

/**
 * Return a given string array, as a number array.
 * @param {array} VALUES Given number as a number type.
 * @returns {string} Return the number as a string.
 */

export const getWordFromValues = function (VALUES) {
  return VALUES.reduce((word, value) => {
    return word + value.toString();
  }, "");
};
